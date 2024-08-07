#include "blog.h"
// blog_generator_beg
extern blog blog_20220515_dimension_reduction;
extern blog blog_20221001_cpp_note;
extern blog blog_20230302_linux;
extern blog blog_20230819_lua_syntax_tutorial;
extern blog blog_20240229_cuda_basic;
extern blog blog_20240312_make_deeplearningsys;
extern blog blog_20240401_pd_attentionisallyouneed;
extern blog blog_20240402_pd_mqa;
extern blog blog_20240405_pd_flashattn;
extern blog blog_20240405_pd_flashattn2;
extern blog blog_20240405_pd_glm;
extern blog blog_20240406_pd_glm_130b;
extern blog blog_20240407_pd_gpt3_5;
extern blog blog_20240408_pd_gpt1;
extern blog blog_20240408_pd_gpt3;
extern blog blog_20240409_pd_gpt2;
extern blog blog_20240410_pd_gpt4;
extern blog blog_20240410_pd_llama;
extern blog blog_20240411_pd_llama2;
extern blog blog_20240412_pd_lora;
extern blog blog_20240412_pd_qlora;
extern blog blog_20240413_pd_p_tuning;
extern blog blog_20240413_pd_p_tuning2;
extern blog blog_20240414_pd_gqa;
extern blog blog_20240416_pd_megatron_lm;
extern blog blog_20240422_sgemm;
extern blog blog_20240509_online_softmax;
extern blog blog_20240516_flash_attention;
extern blog blog_20240711_book_gpgpu1;

void blog_generate(){
	vector<blog> blogvec {
		blog_20220515_dimension_reduction,
		blog_20221001_cpp_note,
		blog_20230302_linux,
		blog_20230819_lua_syntax_tutorial,
		blog_20240229_cuda_basic,
		blog_20240312_make_deeplearningsys,
		blog_20240401_pd_attentionisallyouneed,
		blog_20240402_pd_mqa,
		blog_20240405_pd_flashattn,
		blog_20240405_pd_flashattn2,
		blog_20240405_pd_glm,
		blog_20240406_pd_glm_130b,
		blog_20240407_pd_gpt3_5,
		blog_20240408_pd_gpt1,
		blog_20240408_pd_gpt3,
		blog_20240409_pd_gpt2,
		blog_20240410_pd_gpt4,
		blog_20240410_pd_llama,
		blog_20240411_pd_llama2,
		blog_20240412_pd_lora,
		blog_20240412_pd_qlora,
		blog_20240413_pd_p_tuning,
		blog_20240413_pd_p_tuning2,
		blog_20240414_pd_gqa,
		blog_20240416_pd_megatron_lm,
		blog_20240422_sgemm,
		blog_20240509_online_softmax,
		blog_20240516_flash_attention,
		blog_20240711_book_gpgpu1,
	};
	extern void generate_blog_index(vector<blog>&);
	generate_blog_index(blogvec);
}
// blog_generator_end


int main(){
	blog_generate();

}




































