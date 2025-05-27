cmake_minimum_required(VERSION 3.29.3)
project(NerIDE)

set(CMAKE_CXX_STANDARD 17)


# Include GLAD and GLM
include_directories(
    libs/IMGUI_DOCKING
    libs/IMGUI_DOCKING/backends
)

# Add GLFW
add_subdirectory(libs/GLFW)

# Find OpenGL
find_package(OpenGL REQUIRED)


# Add ImGui source files
set(IMGUI_SRC
    libs/IMGUI_DOCKING/imgui.cpp
    libs/IMGUI_DOCKING/imgui_draw.cpp
    libs/IMGUI_DOCKING/imgui_tables.cpp
    libs/IMGUI_DOCKING/imgui_widgets.cpp
    libs/IMGUI_DOCKING/backends/imgui_impl_glfw.cpp
    libs/IMGUI_DOCKING/backends/imgui_impl_opengl3.cpp
)
add_library(imgui STATIC ${IMGUI_SRC})
target_link_libraries(imgui PRIVATE glfw OpenGL::GL)


# Add the executable
add_executable(NerIDE 
    src/main.cpp
    src/UI.cpp
)


# Link GLFW and IMGUI
target_link_libraries(NerIDE PRIVATE imgui glfw OpenGL::GL)
