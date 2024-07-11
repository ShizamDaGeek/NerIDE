#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu, Wry};

fn main() {
  let new = CustomMenuItem::new("new".to_string(), "New");
  let open = CustomMenuItem::new("open".to_string(), "Open");
  let exit = CustomMenuItem::new("exit".to_string(), "Exit");
  let file_menu = Submenu::new("File", Menu::new().add_item(new).add_item(open).add_native_item(MenuItem::Separator).add_item(exit));

  let undo = CustomMenuItem::new("undo".to_string(), "Undo");
  let redo = CustomMenuItem::new("redo".to_string(), "Redo");
  let edit_menu = Submenu::new("Edit", Menu::new().add_item(undo).add_item(redo));

  let about = CustomMenuItem::new("about".to_string(), "About");
  let help_menu = Submenu::new("Help", Menu::new().add_item(about));

  let menu = Menu::new()
    .add_submenu(file_menu)
    .add_submenu(edit_menu)
    .add_submenu(help_menu);

  tauri::Builder::default()
    .menu(menu)
    .on_menu_event(|event| match event.menu_item_id() {
      "new" => {
        println!("New was clicked");
      }
      "open" => {
        println!("Open was clicked");
      }
      "exit" => {
        std::process::exit(0);
      }
      "undo" => {
        println!("Undo was clicked");
      }
      "redo" => {
        println!("Redo was clicked");
      }
      "about" => {
        println!("About was clicked");
      }
      _ => {}
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
