#include "include/libs.hpp"

// IMGUI Initialization
void UI::Init(GLFWwindow* window)
{
    // Checking IMGUI version
    IMGUI_CHECKVERSION();
    ImGui::CreateContext();
    ImGuiIO& io = ImGui::GetIO(); (void)io;
    io.ConfigFlags |= ImGuiConfigFlags_NavEnableKeyboard;     // Enable Keyboard Controls
    io.ConfigFlags |= ImGuiConfigFlags_DockingEnable;         // Enable Docking
    io.ConfigFlags |= ImGuiConfigFlags_ViewportsEnable;       // Enable Multi-Viewport

    // Style of IMGUI
    ImGui::StyleColorsDark();

    ImGui_ImplGlfw_InitForOpenGL(window, true);
    ImGui_ImplOpenGL3_Init("#version 460");
}

// IMGUI Render
void UI::Render()
{
    // IMGUI GUI
    ImGui_ImplOpenGL3_NewFrame();
    ImGui_ImplGlfw_NewFrame();
    ImGui::NewFrame();

    // Menu Bar (TOP)
    if (ImGui::BeginMainMenuBar())
    {
        if (ImGui::BeginMenu("File"))
        {

            ImGui::EndMenu();
        }

        if (ImGui::BeginMenu("Edit"))
        {

            ImGui::EndMenu();
        }

        if (ImGui::BeginMenu("View"))
        {

            ImGui::EndMenu();
        }

        ImGui::EndMainMenuBar();
    }

    // Hierarchy Window (LEFT)
    ImGui::SetNextWindowPos(ImVec2(0, 18), ImGuiCond_Always);
    ImGui::SetNextWindowSize(ImVec2(300, 990), ImGuiCond_Always);
    ImGui::Begin("Hierarchy", nullptr, ImGuiWindowFlags_NoMove | ImGuiWindowFlags_NoCollapse | ImGuiWindowFlags_NoResize);
    ImGui::End();

    // Level/Map Window (BOTTOM)
    ImGui::SetNextWindowPos(ImVec2(300, 810), ImGuiCond_Always);
    ImGui::SetNextWindowSize(ImVec2(1320, 900), ImGuiCond_Always);
    ImGui::Begin("Levels/Maps and Console", nullptr, ImGuiWindowFlags_NoMove | ImGuiWindowFlags_NoCollapse | ImGuiWindowFlags_NoResize);
    
    // Start Tab Bar
    if (ImGui::BeginTabBar("LevelConsoleTabs")) 
    {
    
        // Levels/Maps Tab
        if (ImGui::BeginTabItem("Levels/Maps")) 
        {
            ImGui::Text("Select Level:");
            ImGui::EndTabItem();
        }

        // Console Tab
        if (ImGui::BeginTabItem("Console"))
        {
            static char consoleBuffer[1024] = ""; // Store console output
            ImGui::InputTextMultiline("##ConsoleOutput", consoleBuffer, IM_ARRAYSIZE(consoleBuffer), ImVec2(-FLT_MIN, ImGui::GetTextLineHeight() * 8), ImGuiInputTextFlags_ReadOnly);
            ImGui::EndTabItem();
        }

        ImGui::EndTabBar();
    }
    ImGui::End();

    // Render IMGUI
    ImGui::Render();
    ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());
}

// IMGUI Cleanup
void UI::Shutdown()
{
    ImGui_ImplOpenGL3_Shutdown();
    ImGui_ImplGlfw_Shutdown();
    ImGui::DestroyContext();
}