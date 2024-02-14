const titleEl = document.getElementById('title')
const contrntEl = document.querySelector('.content')
const allEl = document.querySelectorAll('p')

function OP()
{
    titleEl.style.color = "white"
    titleEl.style.background = "red"
}

function PO()
{
    /*titleEl.style.color = "black"
    titleEl.style.background = "white"*/
    contrntEl.setAttribute('class', 'room')
}


// HTML..
/*<body>
    <!--button onclick="daleteData();">เข้าสู่ระบบ</--button>
    <button onclick="displayName();">ดูข้อมูลชื่อ</button>
    <p id="pop">ddddddddddd<p>
    <h1 id="title">Hello World</h1>
    <h1 class="content">Hello World</h1>
    <button onclick="OP()">run</button>
    <button onclick="PO()">back</button>
    <script-- src="app.js"></script-->
</body>*/