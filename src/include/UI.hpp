#ifndef UI_HPP
#define UI_HPP

#include "./libs.hpp"

class UI
{
public:
    void Init(GLFWwindow* window);
    void Render();
    void Shutdown();
};

#endif