use tauri::Manager;
// use tauri::event::emit;

#[tauri::command]
fn greet(name: String) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
// #[tauri::command]
// fn my_custom_command() {
//   println!("I was invoked from JS!");
// }

fn main() {
    println!("Message from Rust");
    // You can emit the event from Rust in response to certain actions or events
    // For demonstration purposes, let's emit the event after a delay of 2 seconds
    std::thread::sleep(std::time::Duration::from_secs(2));
    // emit("my-event", Some("payload data")).expect("Failed to emit event");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            #[cfg(debug_assertions)] // only include this code on debug builds
            {
                let window = app.get_window("main").unwrap(); // Use the get_window method from the Manager trait
                window.open_devtools();
                window.close_devtools();
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
