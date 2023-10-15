<html>

<head>
  <!-- link rel="stylesheet" href="/styles.css" -->
<style>
.time {
        font-family: sans-serif; 
        font-weight: bold;
        width: 150;
        height: 65;
        position: fixed;
        padding: 20px;
        bottom: 100; /* pixels from bottom */
        right: 100;  /* pixels from right edge to right border*/      
        background-color: #aa0000;
        font-size: 60px;
        color: white;
}    
  </style>
  <script>
    let webSocket = new WebSocket(location.origin.replace(/^http/, 'ws'));
    let el;

    webSocket.onmessage = (event) => {
      el = document.getElementById('time');
      el.innerHTML = event.data;
    };
  </script>
</head>

<body>
  <div id="time" class="time"></div>
</body>

</html>
