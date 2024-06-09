#pragma once
#include <fstream>
#include <iostream>
#include "blog_html.h"
#include <string>
#include <vector>
using namespace std;

struct blog {
	string title;
	string author;
	string date;
	string description;
	string type;
	string language;
	string category;
	string target_file_name;
	string ps; 
	string content;
	string redirect;
	// render

	// blog index html
	// category
	//     - title (data, type, ps)
	//       description

	// blog html
	// title
	// date, author
	// description

	void generate(){
		// 这里是生成blog对应的html文件, 如果是pdf只用在generator中对blog.html设置链接就行
		if(redirect == "" || redirect == "none"){
			string filename = "../blog/"+target_file_name+".html";

			ofstream outfile(filename);
			if (!outfile) {
				cerr << "无法打开文件: " << filename << endl;
				return;
			}
			if ( language == "english" )
				outfile << blog_html_english_head;
			else
				outfile << blog_html_chinese_head;

			// header
			outfile << "<div class='disp-toc-header'>\n<h1>" + title + "</h1><h2 style=\"font-family: 'ZCOOL XiaoWei', regular;\">" + author + ' ' + date;
			if(ps!=""&&ps!="none") outfile << " " << ps << "</h2>" << endl;
			else outfile << "</h2>" << endl;

			if(description!=""&&description!="none") outfile << "<p>" + description + "</p>";
			outfile << "</div>";

			extern string blog_markdown2html(string);
			outfile << blog_markdown2html("./raw_file/blog_markdown/" + target_file_name + ".md");

			outfile << blog_html_tail;
			outfile.close();
		}
	}
};