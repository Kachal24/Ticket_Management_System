html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket Management System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Ticket Management System</h1>

        <!-- Ticket Form -->
        <div id="ticket-form">
            <h2>Add New Ticket</h2>
            <label for="title">Title:</label>
            <input type="text" id="title" placeholder="Enter ticket title">
            <label for="description">Description:</label>
            <textarea id="description" placeholder="Enter ticket description"></textarea>
            <label for="priority">Priority:</label>
            <select id="priority">
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button id="add-ticket">Add Ticket</button>
        </div>

        <!-- Ticket Table -->
        <h2>All Tickets</h2>
        <table id="ticket-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

        <!-- Summary Report -->
        <button id="generate-report">Generate Report</button>
        <div id="report"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
"""

# Generate the HTML file
with open("index.html", "w") as file:
    file.write(html_content)

print("HTML file generated successfully! Open 'index.html' in your browser.")
