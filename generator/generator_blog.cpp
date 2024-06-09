#include "blog.h"
#include <set>
#include <filesystem>

namespace fs = std::filesystem;

// 获取指定目录下的所有子文件夹
std::vector<fs::path> listDirectories(const std::string& path) {
	std::vector<fs::path> directories;
	for (const auto& entry : fs::directory_iterator(path)) {
		if (entry.is_directory()) {
			directories.push_back(entry.path());
		}
	}
	return directories;
}

// 获取指定目录下的所有 .cpp 文件，并去掉后缀
std::vector<std::string> listCppFiles(const fs::path& directory) {
	std::vector<std::string> cppFiles;
	for (const auto& entry : fs::directory_iterator(directory)) {
		if (entry.is_regular_file() && entry.path().extension() == ".cpp") {
			cppFiles.push_back(entry.path().stem().string()); // 去掉 .cpp 后缀
		}
	}
	return cppFiles;
}

// 生成blog.html 索引页面
void generate_blog_index(vector<blog>& blogvec){
	ofstream outfile("../blog.html");
	outfile << blog_index_head;

	set<string> categories;

	for(auto& blog : blogvec){
		blog.generate();
		categories.emplace(blog.category);
	}

	// 时间倒序
	std::reverse(blogvec.begin(), blogvec.end());

	for(auto& cate : categories){
		outfile << "<section><h1>" + cate + "</h1><ul>\n";
		for(auto& blog : blogvec){
			if(blog.category == cate){
				bool isredirect = !(blog.redirect == "" || blog.redirect == "none");
				string path = isredirect ? blog.redirect : "./blog/" + blog.target_file_name + ".html";

				outfile << "<li><a href=\""+path+"\">"+blog.title+"</a> ( "+blog.date+", "+blog.type;
				if(blog.ps != "" && blog.ps != "none"){
					outfile << ", "+blog.ps;
				}
				outfile << " )";
				if(blog.description != "" && blog.description != "none"){
					outfile << "<p>"+blog.description+"</p>";
				}
				outfile << "</li>\n";
			}
		}
		outfile << "</ul></section>\n";
	}

	outfile << blog_index_tail;
}