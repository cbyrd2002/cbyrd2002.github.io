var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones

        // BEGIN EDITING YOUR CODE HERE
        var enemy =  game.createGameItem('enemy',25);
        enemy.x = 400;
        enemy.y = groundY-50;
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10);
        
        game.increaseScore(100);
        };
        function createCoin(x, y) {
        var coin = game.createGameItem('reward',25);
        var coinImage = draw.bitmap('img/marioCoin.png');
        coin.x = x;
        coin.y = y;
        coinImage.x = coin.x;
        coinImage.y = coin.y;
        coin.addChild(coinImage);
        game.addGameItem(coin);
        coin.velocityX = -1;
        coin.onPlayerCollision = function() {
        game.increaseScore(100);
        coin.fadeOut();
        };
    }
        
        function createKoopa(x, y) {
        var enemy =  game.createGameItem('enemy',25);
        enemy.x = x;
        enemy.y = y;
        var enemyImage = draw.bitmap('img/koopaTroopa.png');
        enemyImage.x = x;
        enemyImage.y = y;
        enemy.addChild(enemyImage);
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10);
        enemy.fadeOut();
        game.increaseScore(100);
        };

        }
                        
        function createGoomba(x,y) {
        var enemy =  game.createGameItem('enemy',25);
        enemy.x = x;
        enemy.y = y;
        var enemyImage = draw.bitmap('img/goomba.png');
        enemyImage.x = x;
        enemyImage.y = y;
        enemy.addChild(enemyImage);
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10);
        enemy.fadeOut();
        game.increaseScore(100);
        };   
        }
        
        
        
        
        function createSawBlade(x,y) {
         var hitZoneSize = 25;
         var damageFromObstacle = 10;
         var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
         game.addGameItem(myObstacle); 
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
         myObstacle.x = x;
         myObstacle.y = y;
        }  
        
        function createFire(x,y) {
        var hitZoneSize = 17;
        var damageFromObstacle = 10;
        var myBox = game.createObstacle(hitZoneSize,damageFromObstacle)
        game.addGameItem(myBox);
        var fireImage = draw.bitmap('img/fireBall.jpg');
        myBox.addChild(fireImage);
        myBox.x = x;
        myBox.y = y;
        }
        
        
  
        for (var i = 0; i < levelData.gameItems.length; i++) {
        var gameItem = levelData.gameItems[i];
        createSawBlade(gameItem.x, gameItem.y);
        createFire(gameItem.x, gameItem.y);
        
        }


        createCoin(300, 200)
        
        createKoopa(400,200);
        createKoopa(800,200);
        createGoomba(1200,200);

        createFire(400, 300);
        createSawBlade(300, 400);

    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}