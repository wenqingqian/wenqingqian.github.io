---
title: CUDA basic
date: 2024-2-29
description: warp, block, sm, ... , warp divergence, bank conflict, ..., cuda best practice extraction and some online resource summary
category: cuda
author: wenqingqian
type: html
language: chinese
ps: none
redirect: none
---

![60](./pic/cuda-basic/gpuarch.png)

# CUDA Basic

## warp

- 32线程( nvidia, AMD 似乎是64), 基本调度单位, 同步执行


## Block

- 一个 block 的线程属于同一个 sm, 即使 block 线程数大于 cuda core per SM, 此时部分线程关系是串行

- block 中的线程会被分为几个 warp (32线程), 不足32线程的也会补足到32线程, 但补的处于未激活状态

- (GeForce RTX 4090) 一个 block 最多1024个线程, 三维(1024,1024,64)(相乘仍要小于等于1024)

- kernel 中定义的 shared memory 当前 block 可见

- 不同 block 优先分配到不同 SM ( GPT )



## Grid

- (GeForce RTX 4090) 三维($2^{31}-1$, 65535, 65535)

## SM

- 一个 SM 中的 CUDA core (SP) 数量有限, 若

- 一个 SM 拥有一个 shared memory, 多个 warp scheduler

- 一次能同时选择多个warp执行 (取决于warp schedule数量) 


# Optim

ref: <a href="https://www.bilibili.com/video/BV16b4y1E74f/?spm_id_from=333.788&vd_source=6823fff4176fbb99da705bde30eb8cea">bilibili, </a><a href="https://wiki.lcpu.dev/zh/hpc/from-scratch/cuda">lsy</a>

## warp divergence

- 每个线程会执行当前 kernel 的所有代码, 包括所有分支, 即使当前线程不属于这个分支(比如 if 判断失败), 但这类线程对寄存器的修改会被忽视(单纯会一起执行)

## latency hiding

- SM 可以在 IO 等待时切换 warp

## register spill

- 一个 block 不要用太多局部变量, 不然L1 Cache放不下就要访问显存了

## shared memory

- 手动L1 Cache

## memory coalescing

一个warp的线程会同时执行, 这意味着它们会同时访存, GPU 会把这些访存请求打包成尽可能少的 Transaction (可以把每一个 Transaction 理解为 GPU 核心向显存发起的一次访存操作), 这个过程就叫做 Memory coalescing
Transaction 需要满足:
- 长度为 32 个 Byte
- 开始地址是 32 的倍数 
如果一个 Warp 中的第 i 个 Thread 要访问地址为 4i∼4i+3 的内存, 那么一共需要 4 个 Transaction 才能读完所有的数据
如果一个 Warp 中的第 i 个 Thread 要访问地址为 4i+1∼4i+4 的内存, 那么需要 5 个 Transaction 才能读取所有的数据
如果第 i 个 Warp 要访问地址为 32i∼32i+3 的内存, 那么就需要 32 次 Transaction 才能完成读取了

当warp中的所有线程执行load指令时, 硬件会检测它们访问的全局内存位置是否是连续的. 如果是的话, 硬件会将这些访问合并成一个对连续位置的访问

## bank conflict

Shared Memory一共划分为32个Bank, 每个Bank的宽度为4 Bytes, 如果需要访问同一个Bank的多个数据, 就会发生Bank Conflict

当多个线程读写同一个Bank中的数据时会从并行读取变为顺序读取

特殊的:

- 多个线程读同一个数据时, 仅有一个线程读, 然后broadcast到其他线程
- 多个线程写同一个数据时, 仅会有一个线程写成功

# Numerical Accuracy and Precision

ref: <a href="https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html#numerical-accuracy-and-precision">cuda-c-best-practices</a>

## Floating Point Math Is not Associative

Each floating-point arithmetic operation involves a certain amount of rounding. 

Consequently, the order in which arithmetic operations are performed is important. If A, B, and C are floating-point values, (A+B)+C is not guaranteed to equal A+(B+C) as it is in symbolic math. 

When you parallelize computations, you potentially change the order of operations and therefore the parallel results might not match sequential results. This limitation is not specific to CUDA, but an inherent part of parallel computation on floating-point values.

## IEEE 754 Compliance

All CUDA compute devices follow the IEEE 754 standard for binary floating-point representation, with some small exceptions. These exceptions, which are detailed in Features and Technical Specifications of the CUDA C++ Programming Guide, can lead to results that differ from IEEE 754 values computed on the host system.

One of the key differences is the fused multiply-add (FMA) instruction, which combines multiply-add operations into a single instruction execution. Its result will often differ slightly from results obtained by doing the two operations separately.

## x86 80-bit Computations

x86 processors can use an 80-bit *double extended precision* math when performing floating-point calculations. The results of these calculations can frequently differ from pure 64-bit operations performed on the CUDA device. To get a closer match between values, set the x86 host processor to use regular double or single precision (64 bits and 32 bits, respectively). This is done with the `FLDCW` x86 assembly instruction or the equivalent operating system API.

# Arithmetic Instructions

ref: <a href="https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html#arithmetic-instructions">cuda-c-best-practices</a>

## Division Modulo Operations

Use shift operations to avoid expensive division and modulo calculations

- if $n$ is a power of 2, $\frac{i}{n}=i\gg log2(n)$
- $i\%n = i\&(n-1)$.

The compiler will perform these conversions automatically if $n$ is literal

## Loop Counters Signed vs Unsigned

use signed integers rather than unsigned integers as loop counters

- For signed integers, since their overflow can lead to undefined behavior, the compiler can assume that there is no signed integer overflow in the code and perform more aggressive optimizations. 
  For example, the compiler can improve the performance of your code by rearranging the order of calculations or using faster instructions.

- For unsigned integers, since their overflow is defined, the compiler cannot assume that there is no overflow in the code, because this may affect the correctness of the program. 
  Therefore, the compiler needs to retain checks for unsigned integer overflows and act accordingly to ensure that the program behaves as expected, which may limit some optimization possibilities.

## Other

- use `rsqrtf()`instead of `1.0f/sqrtf()`
- using `f` suffix to define the floats 
- for single-precision code, float type and the single-precision math functions are recommended
- use square roots, cube roots and their inverses instead of `pow()`
- for exponentiation using base 2 or 10: $2^x,10^x$, use the functions `exp2(),expf2(),exp10(),expf10()`

## Math Libraries

Two types of runtime math operations are supported:

- `__functionName()` and `functionName()`
- `__functionName()` are faster but provide lower accuracy

The `-use_fast_math` compiler option of `nvcc` coerces all `functionName()` call to the equivalent `__functionName()`call

# Control Flow

ref: <a href="https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html#control-flow">cuda-c-best-practices</a>

## Branching and Divergence

Avoid different execution paths within the same warp

Starting with the Volta architecture, Independent Thread Scheduling allows a warp to remain diverged outside of the data-dependent conditional block 

An explicit `__syncwarp()` can be used to guarantee that the warp has reconverged for subsequent instructions

## Branch Predication

The compiler uses branch prediction in lieu of loops or control statements to eliminate redundant judgment instructions, such as each `++` operation and comparison operation in the `for loop`

or explictly use `#pragma unroll`

