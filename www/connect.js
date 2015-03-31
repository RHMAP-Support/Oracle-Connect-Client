document.getElementById('go').onclick = function () {
  document.getElementById('connectResponse').innerHTML = "<p>Connecting.....</p>";
  $fh.cloud(
      {
        path: 'connect',
        data: {
          host: document.getElementById('host').value,
          port: document.getElementById('port').value,
          database: document.getElementById('database').value,
          user: document.getElementById('user').value,
          password: document.getElementById('password').value,
        }
      },
      function (res) {
        document.getElementById('connectResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};