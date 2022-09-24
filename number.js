<style type="text/css">
  body{
    background: #3f9d43;
  }
  .box{
    width: 50%;
    margin: 0 auto;
    padding:30px;
    text-align: center;
  }
  .odometer{
    font-size: 12em;
    background:#fff;
      border-radius:40px 40px 0 0;
      margin-top:50px;
      border-bottom: 2px solid #ddd;
  }
  .btn-winner{
    font-size: 2em;
    background: #6c9dc9;
    color: #fff;
    cursor: pointer;
  }
  .btn-winner:hover {
      transition-duration: 0.1s;
      box-shadow:  0 0 18px rgba(255, 255, 255, 0.75);
      user-select: none;
  }

</style>

<div id="odometer" class="odometer box">0</div>
<div class="btn-winner box" onclick="getWinner();">Get Winner</div>


  <script type="text/javascript">

  function generateRandom(maxLimit = 100){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
  }
  
  function getWinner(){
    document.getElementsByClassName('btn-winner')[0].innerHTML = 'Please wait for the result ....';
    interval = setInterval(function(){
        document.getElementById('odometer').innerHTML = generateRandom();
    },100);

    setTimeout(function(){
      clearInterval(interval);
      document.getElementsByClassName('btn-winner')[0].innerHTML = 'Get Winner';
    },3000);
  }

    
</script>
