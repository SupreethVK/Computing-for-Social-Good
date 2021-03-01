<?php

function Connect()
{
 $dbhost = "localhost:3306";
 $dbuser = "root";
 $dbpass = "";
 $dbname = "medmap";

 // $dbhost    = 'localhost:3306';
 // $dbuser    = 'root';
 // $dbpass    = '';
 // $dbname      = 'coronamap';

 // $dbuser = "desimill";
 // $dbpass = "bKp552Ivp1";
 // $dbname = "desimill_khi_gives";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}

?>
