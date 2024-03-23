$(function() {
    // Load code snippets from JSON file
    $.getJSON("codeSnippets.json", function(data) {
        var languageSnippets = data;

        // Autocomplete function
        $("#autocomplete-input").autocomplete({
            source: function(request, response) {
                var language = detectLanguage(request.term); // Detect language based on user input
                if (language && languageSnippets[language]) {
                    response(languageSnippets[language]); // Provide suggestions based on detected language
                } else {
                    response([]); // If language not detected or no suggestions available, return empty array
                }
            },
            minLength: 2 // Set minimum length for triggering autocomplete
        });

        // Function to detect programming language based on keywords or patterns
        function detectLanguage(code) {
            // Implement your logic here to detect language based on keywords or patterns
            // For simplicity, this example just checks for JavaScript or Python keywords
            if (code.includes("function") || code.includes("console.log")) {
                return "javascript";
            } else if (code.includes("def") || code.includes("print")) {
                return "python";
            }
            return null; // Return null if language not detected
        }
    });
});
