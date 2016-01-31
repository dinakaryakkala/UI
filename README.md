# UI
User Interface
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8">

<title></title>


</head>
<style>
.dropdown{
position:absolute;
display:none;
}
nav ul li{
float:left;
margin:0;
padding:5px 10px 0px 10px;
list-style:none;
}
nav ul li:hover ul{
display:block;
background-color:black;
width:80px;
margin:0;
padding:0;
}
nav ul li ul li{
margin:0;
padding:5px 10px 10px 10px;
width:100%;
}
a:hover{
color:#ffaa55;
}
nav ul li ul li .dropdown{
display:none;
position:absolute;
}
nav ul li ul li .dropdown{
margin:0;
padding:0;
width:90px;
}
nav ul li ul li:hover .dropdown{
display:block;
}


</style>

<body>
<nav>
<ul>
   <li><a href="">Menu 1</a>
     <ul class="dropdown">
	    <li><a href="">Menu 1.1</a>
		<ul class="dropdown">
		<li><a href="">Menu 1.1.1</a></li>
		<li><a href="">Menu 1.1.2</a></li>
		<li><a href="">Menu 1.1.3</a></li>
		<li><a href="">Menu 1.1.4</a></li>
		</ul>
		</li>
		<li><a href="">Menu 1.2</a>
		<ul class="dropdown">
		<li><a href="">Menu 1.2.1</a></li>
		<li><a href="">Menu 1.2.2</a></li>
		<li><a href="">Menu 1.2.3</a></li>
		<li><a href="">Menu 1.2.4</a></li>
		</ul>
		</li>
		<li><a href="">Menu 1.3</a>
		<ul class="dropdown">
		<li><a href="">Menu 1.3.1</a></li>
		<li><a href="">Menu 1.3.2</a></li>
		<li><a href="">Menu 1.3.3</a></li>
		<li><a href="">Menu 1.3.4</a></li>
		</ul>
		</li>
		<li><a href="">Menu 1.4</a>
		<ul class="dropdown">
		<li><a href="">Menu 1.4.1</a></li>
		<li><a href="">Menu 1.4.2</a></li>
		<li><a href="">Menu 1.4.3</a></li>
		<li><a href="">Menu 1.4.4</a></li>
		</ul>
		</li>
	 </ul>
    </li>
   <li><a href="">Menu 2</a></li>
   <li><a href="">Menu 3</a></li>
   <li><a href="">Menu 4</a></li>
</ul>
</nav>
</body>

</html>

