<?php
    include "./conection.php";

    $sql="INSERT INTO data values('','$_POST[sensor]','$_POST[value]','$_POST[date]', '$_POST[time]')";
    $result = mysqli_query($link, $sql); //ejecuto la consulta

    ?>
        <meta http-equiv="refresh" content="0;URL=../index.php">
    <?php
    
    if (!mysqli_error($link)){ ?>
        <script>
            alert("Operación Realizada Correctamente");
        </script>
    <?php }else{ ?>
        <script>
            alert ("Ha Ocurrido Un Fallo En La Operación");
        </script>
    <?php } 
?>