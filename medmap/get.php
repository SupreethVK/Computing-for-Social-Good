
<?php

$connect = mysqli_connect("localhost:3306","root","","medmap")or die($conn->connect_error);

$query = "select * from category";

$result1 = mysqli_query($connect, $query);



?>
<!DOCTYPE html>

<html>

    <head>

        <title> PHP SELECT OPTIONS FROM DATABASE </title>

        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

    </head>

    <body>



        <select  onChange="getSelect(this)">

        <option>Select</option>
                   <?php while($row1 = mysqli_fetch_array($result1)):;?>

            <option value="<?php echo $row1[0];?>"><?php echo $row1[1];?></option>

            <?php endwhile;?>



        </select>

        <div id="resultSelect"></div>
  <script>
    function getSelect(thisValue){
        document.getElementById('resultSelect').innerHTML=thisValue.options[thisValue.selectedIndex].value;

    }
  </script>

  </body>

</html>
