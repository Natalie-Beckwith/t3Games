<head>
    <!-- load jQuery and DataTables scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>
<table color="white" id="flaskTable" class="table" style="width:100%">
    <thead id="flaskHead">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody id="flaskBody"></tbody>
</table>

<script>
  $(document).ready(function() {
    fetch('http://127.0.0.1:4000/users', { mode: 'cors' })
    .then(response => {
      if (!response.ok) {
        throw new Error('API response failed');
      }
      return response.json();
    })
    .then(data => {
      for (const row of data) {
        %  BUG warning/resolution - DataTable requires row to be single append
        $('#flaskBody').append('<tr><td>' + 
            row.id + '</td><td>' + 
            row.name + '</td><td>' + 
            row.age + '</td><td>') ; 
      }
      // BUG warning - Jupyter does not show Datatable controls, works on deployed GitHub pages
      $("#flaskTable").DataTable();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
</script>