cmake_minimum_required(VERSION 3.10)
project(MyProject)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED on)

set(EXECUTABLE_OUTPUT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wno-gnu-designator")

include_directories(./include)

add_subdirectory(./raw_file/blog/)

file(GLOB file "*.cpp")

add_executable(generator ${file})

target_link_libraries(generator blog)