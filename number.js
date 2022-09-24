<!DOCTYPE html>
<html>
<body>
{text-align: center;}
<h2>JavaScript Math</h2>

<p>Math.floor(Math.random() * 146) returns a random integer between 0 and 146 (both
included):</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 146);
</script>
<button onclick="location.reload();">Play</button>
</body>
</html>
