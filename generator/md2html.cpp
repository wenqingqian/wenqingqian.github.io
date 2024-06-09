#include <iostream>
#include <fstream>
#include <sstream>
#include <regex>
#include <string>

std::string markdown_to_html(const std::string& markdown) {
	std::stringstream html;
	std::stringstream section;
	std::istringstream iss(markdown);
	std::string line;
	bool inSection = false;
	bool inMathBlock = false;
	bool inList = false;
	bool inMetadata = false;
	bool skipMetadata = false;
	std::stringstream mathBlock;
	std::regex listItemRegex(R"(^(\s*)-\s+(.*))");
	std::regex IndentRegex(R"(^(\s*)(.*))");

	int lastIndentLevel = -1;
	int IndentCount[100];
	memset(IndentCount, 0 ,sizeof(IndentCount));

	while (std::getline(iss, line)) {
		std::string emptyline = std::regex_replace(line, std::regex("^\\s+|\\s+$"), "");
		if (emptyline.empty()) continue;

		if (emptyline == "---") {
			if (!inMetadata) {
				inMetadata = true;
				skipMetadata = true;
				continue;
			} else {
				skipMetadata = false;
				continue;
			}
		}

		if (skipMetadata) continue;

		std::smatch match;
		std::regex_search(line, match, listItemRegex);

		if (!line.empty() && inList && !std::regex_search(line, listItemRegex)) {
			std::smatch match;
			std::regex_search(line, match, IndentRegex);
			std::string indent = match[1];

			if(indent.length() == lastIndentLevel + 2){
				std::string item = match[2];

				// 列表中有单行公式
				item = std::regex_replace(item, std::regex("^\\s?\\$\\$(.*?)\\$\\$\\s?$"), "<div>\\[ $1 \\]</div>");
				
				item = std::regex_replace(item, std::regex("\\$(.*?)\\$"), "\\($1\\)");
				item = std::regex_replace(item, std::regex("\\`(.*?)\\`"), "<code>$1</code>");
				section << "<p style=\"margin-bottom: 0em;\">" << item << "</p>" << std::endl;
				continue;
			}else{
				for(int i = 0; i < 100; i ++){
					while(IndentCount[i] != 0){
						section << "</ul>" << std::endl;
						IndentCount[i] --;
					}
				}
				inList = false;
				lastIndentLevel = -1;
			}
		}

		// Process headers
		if (!std::regex_match(line, std::regex("^\\$\\$")) && inMathBlock) {
			mathBlock << line << std::endl;
		} else if (std::regex_match(line, std::regex("^# .+"))) {
			if (inSection) {
				section << "</section>" << std::endl;
				html << section.str();
				section.str("");
				section.clear();
			}
			section << "<section>" << std::endl;
			section << "<h1>" << line.substr(2) << "</h1>" << std::endl;
			inSection = true;
		} else if (std::regex_match(line, std::regex("^## .+"))) {
			section << "<h2>" << line.substr(3) << "</h2>" << std::endl;
		} else if (std::regex_match(line, std::regex("^### .+"))) {
			section << "<p><u>" << line.substr(3) << "</u></p>" << std::endl;
		// Process images
		} else if (std::regex_match(line, std::regex("^!\\[(.+?)\\].*"))) {
			std::string img_line = line;
			std::smatch match;
			std::regex_search(line, match, std::regex("^!\\[(.+?)\\].*"));
			std::string sizes = match[1];

			std::vector<std::string> sizev;
			std::string size_tmp;
			for(auto c : sizes){
				if( c == ' ' ) continue;
				if( c == ',' ) {
					sizev.emplace_back(size_tmp);
					size_tmp = "";
				}else{
					size_tmp += c;
				}
			}
			if (size_tmp != "") sizev.emplace_back(size_tmp);


			std::vector<std::string> linkv;
			std::string link_tmp;
			std::string desc;

			int ptype = 0;
			int turn = 1;
			int ppcnt = 0;
			for(auto c : img_line){
				if( ptype == 0 && c == ']' ){
					ptype = 1;
					continue;
				}
				if( ptype == 0 ) continue;
				if( turn != 2 && c == ' ' ) continue;

				if( turn == 1 ){
					if( c == '(' ) {
						ppcnt ++;
						if(ppcnt == 1) continue;
					}else if( c == ')' ){
						ppcnt --;
					}

					if( ppcnt == 0 ){
						turn = 2;
						if( link_tmp != "" ) linkv.emplace_back(link_tmp);
					}

					if( c == ',' ) {
						linkv.emplace_back(link_tmp);
						link_tmp = "";
					}else{
						link_tmp += c;
					}

				}else{
					if( c == '(' ) {
						ppcnt ++;
						if(ppcnt == 1) continue;
					}else if( c == ')' ){
						ppcnt --;
						if(ppcnt == 0) continue;
					}
					
					desc += c;
				}
			}
			
			if(sizev.size() == 1){
				section << "<img src=\"../generator/raw_file/blog_markdown/" << linkv[0]<< "\" style=\"display: block; margin: 0 auto;width: " << sizev[0] << "%;\" alt=\"err! email me if you need\">" << std::endl;
				if(!desc.empty()) section << "<figure><figcaption>" << desc << "</figcaption></figure>";
			}else{
				for (int i = 0; i < sizev.size(); i ++) {
					section << "<img src=\"../generator/raw_file/blog_markdown/" << linkv[i]<< "\" style=\"width: " << sizev[i] << "%;\" alt=\"err! email me if you need\">" << std::endl;
				}
				if(!desc.empty()) section << "<figure><figcaption>" << desc << "</figcaption></figure>";
			}
		}
		// Process block math
		else if (std::regex_match(line, std::regex("^\\$\\$")) && !inMathBlock) {
			inMathBlock = true;
			// if (std::regex_match(line, std::regex("^\\$\\$\\$\\$$")))
		} else if (std::regex_match(line, std::regex("^\\$\\$")) && inMathBlock) {
			section << "<div>" << std::endl << "\\[" << std::endl;
			section << mathBlock.str();
			section << "\\]" << std::endl << "</div>" << std::endl;
			mathBlock.str("");
			mathBlock.clear();
			inMathBlock = false;
		}
		// Process list block
		else if (std::regex_search(line, match, listItemRegex)) {
			std::string indent = match[1];
			std::string listItem = match[2];
			int currentIndentLevel = indent.length();

			if (currentIndentLevel > lastIndentLevel) {
				IndentCount[currentIndentLevel] ++;
				section << "<ul>" << std::endl;
				inList = true;
			} else if (currentIndentLevel < lastIndentLevel) {
				for(int i = currentIndentLevel + 1; i < 100; i ++){
					while(IndentCount[i] != 0){
						section << "</ul>" << std::endl;
						IndentCount[i] --;
					}
				}
			}

			listItem = std::regex_replace(listItem, std::regex("\\$(.*?)\\$"), "\\($1\\)");
			listItem = std::regex_replace(listItem, std::regex("\\`(.*?)\\`"), "<code>$1</code>");
			section << "<li>" << listItem << "</li>" << std::endl;
			lastIndentLevel = currentIndentLevel;
		}
		// Process inline math and paragraphs
		else {
			if (!line.empty()) {
				std::string processedLine = line;
				// Replace block math in a single line
				if(std::regex_match(line, std::regex("\\$\\$(.*?)\\$\\$"))){
					processedLine = std::regex_replace(processedLine, std::regex("\\$\\$(.*?)\\$\\$"), "<div>\\[ $1 \\]</div>");
					section << processedLine << std::endl;
				}else{

					// Replace inline math
					processedLine = std::regex_replace(processedLine, std::regex("\\$(.*?)\\$"), "\\($1\\)");
					processedLine = std::regex_replace(processedLine, std::regex("\\`(.*?)\\`"), "<code>$1</code>");

					section << "<p>" << processedLine << "</p>" << std::endl;
				}
			}
		}
	}



	if (inList) {
		for(int i = 0; i < 100; i ++){
			while(IndentCount[i] != 0){
				section << "</ul>" << std::endl;
				IndentCount[i] --;
			}
		}
	}

	if (inSection) {
		section << "</section>" << std::endl;
		html << section.str();
	}

	return html.str();
}

std::string blog_markdown2html(std::string path){
	std::ifstream inputFile(path);
	std::stringstream buffer;
	buffer << inputFile.rdbuf();
	std::string markdown = buffer.str();
	std::string html = markdown_to_html(markdown);

	return html;
}