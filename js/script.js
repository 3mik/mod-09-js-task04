function drawTree(height) {
    var _height = height;
    var _star = '';
    for (var i = 1; i <= _height; i++)  {
      _star = '';
      for (var j = 1; j <= i; j++) {
        _star += '*';
      }
      console.log(_star);
    }
  }

  drawTree(1);
  drawTree(3);
  drawTree(5);
  drawTree(9);