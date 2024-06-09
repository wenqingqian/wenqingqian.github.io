# 将./raw_file/blog_markdown 解析到 ./raw_file/blog 生成每个blog对应的cpp文件
rm ./raw_file/blog/*.cpp
BLOG_MD="./raw_file/blog_markdown/"
BLOG_CPP="./raw_file/blog/"

# 遍历文件夹中的所有.md文件
for file in "$BLOG_MD"*.md; do
	# 获取文件名（不包括扩展名）
	filename=$(basename "$file" .md)
	# 处理生成blog cpp文件的结构体名字, 使其合法
	struct_name=$(echo "$filename" | sed 's/[^a-zA-Z0-9]/_/g')
	# 提取YAML front matter中的字段
	yaml_content=$(sed -n '/^---$/,/^---$/p' "$file" | sed '1d;$d')

	title=$(echo "$yaml_content" | grep "^title[ ]*:" | sed 's/^title[ ]*:[ ]*//')
	date=$(echo "$yaml_content" | grep "^date[ ]*:" | sed 's/^date[ ]*:[ ]*//')
	description=$(echo "$yaml_content" | grep "^description[ ]*:" | sed 's/^description[ ]*:[ ]*//')
	category=$(echo "$yaml_content" | grep "^category[ ]*:" | sed 's/^category[ ]*:[ ]*//')
	author=$(echo "$yaml_content" | grep "^author[ ]*:" | sed 's/^author[ ]*:[ ]*//')
	type=$(echo "$yaml_content" | grep "^type[ ]*:" | sed 's/^type[ ]*:[ ]*//')
	language=$(echo "$yaml_content" | grep "^language[ ]*:" | sed 's/^language[ ]*:[ ]*//')
	ps=$(echo "$yaml_content" | grep "^ps[ ]*:" | sed 's/^ps[ ]*:[ ]*//')
	redirect=$(echo "$yaml_content" | grep "^redirect[ ]*:" | sed 's/^redirect[ ]*:[ ]*//')

	# 创建对应的.cpp文件
	cpp_file="${BLOG_CPP}${filename}.cpp"
	echo "#include \"blog.h\"" >"$cpp_file"
	echo "" >>"$cpp_file"
	echo "struct blog blog_$struct_name = {" >>"$cpp_file"
	echo "    target_file_name: \"$filename\"," >>"$cpp_file"
	echo "" >>"$cpp_file"
	echo "    title: \"$title\"," >>"$cpp_file"
	echo "    date: \"$date\"," >>"$cpp_file"
	echo "    description: \"$description\"," >>"$cpp_file"
	echo "    category: \"$category\"," >>"$cpp_file"
	echo "    author: \"$author\"," >>"$cpp_file"
	echo "    type: \"$type\"," >>"$cpp_file"
	echo "    language: \"$language\"," >>"$cpp_file"
	echo "    ps: \"$ps\"," >>"$cpp_file"
	echo "    redirect: \"$redirect\"," >>"$cpp_file"
	echo "};" >>"$cpp_file"

	echo "Created $cpp_file"
done

# 自动更新generator.cpp 将raw_file/blog中所有cpp文件的blog名字注册到generator.cpp中
# 设置要遍历的目录路径
directory="./raw_file/blog/"
input_file="generator.cpp"

# 提取所有 struct blog 的 name 值
names=()
for file in "$directory"/*; do
	if [ -f "$file" ]; then
		name=$(awk '/struct blog/ { for (i = 3; i <= NF; i++) { if ($i ~ /=/) { print $3; exit } } }' "$file")
		if [ ! -z "$name" ]; then
			names+=("$name")
		fi
	fi
done

# 读取目标文件并生成新的内容
inside_block=false
new_content=""

while IFS= read -r line; do
	if [[ "$line" == "// blog_generator_beg" ]]; then
		inside_block=true
		new_content+="$line"$'\n'
		# 生成新的 extern blog 声明
		for name in "${names[@]}"; do
			new_content+="extern blog $name;"$'\n'
		done
		new_content+=$'\n'"void blog_generate(){"$'\n'
		new_content+="\tvector<blog> blogvec {"$'\n'
		for name in "${names[@]}"; do
			new_content+="\t\t$name,"$'\n'
		done
		new_content+="\t};"$'\n'
		new_content+="\textern void generate_blog_index(vector<blog>&);"$'\n'
		new_content+="\tgenerate_blog_index(blogvec);"$'\n'
		new_content+="}"$'\n'
	elif [[ "$line" == "// blog_generator_end" ]]; then
		inside_block=false
		new_content+="$line"$'\n'
	elif [[ "$inside_block" == true ]]; then
		# 跳过块内部其他行
		continue
	else
		new_content+="$line"$'\n'
	fi
done <"$input_file"

# 将新的内容写回原文件
echo "$new_content" >"$input_file"

# blog归档
if [ ! -d ../blog ]; then
	mkdir ../blog
fi
if [ ! -d ../blog_history ]; then
	mkdir ../blog_history
fi
mv ../blog/* ../blog_history/

if [ ! -d build ]; then
	mkdir build
fi
cd build &&
	cmake .. && make -j8 && cd ..

./generator
