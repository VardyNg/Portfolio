/*
        Issues:
            1)  The buying system is hardcode now
            2)  Coins prefix doesn't work
        */
        {
            var screenWidth = 1920;
            var screenHeight = 1080;

            var topBarHeight = 70;
            var bottomBarHeight = 100;

            var topMargin = 10;
            var bottomMargin = 10;
            var leftMargin = 10;
            var rightMargin = 10;

            var componentMargin = 10;

            var gameAreaWidth = 1600;
            var gameAreaHeight = 900;

            var gameIconWidth = 100;
            var gameIConHeight = 100;

            var coinIconScale = 0.3;
            var textScale = 0.75;
            var errorColor = '0xff001e';
            var normalColor = '0x0341fc';
        }
        // information config
        {
            var currentTime; // current time
            var coins; // amount of coins that player own
            var coinsTxt; // amount of coins in text
            var coinsRewardEvent; // event of coins reward
            var coinsRewardInterval = 3000; // interval between coin rewards in ms (1s = 1000ms);
            var performancePercentage; // degree of performance in number
            var currentPerformance; // degree of performance in text, for update
            
            var backgroundShade; 
            
            var waves; // stage of wave
            var wavesTxt; // stage of wave in text 
        }
        // error system config
        {
            var NetworkAccessLayerERROR;
            var InternetLayerERROR;
            var TransportLayerERROR;
            var ApplicationLayerERROR;
            var errorExists;

        // percentage system config
        {
            var bar;
            var startVisible;
        }
            
        // game items
            var gameItems = [[]];
            // [][itemName, itemPrice]
            
            var inventory = [[]];
            // [][itemName, Quantity]
        // debug
        var visibleTest;

        // event state
        var settingOpened;
        }

        class MainClass {
            constructor() {
                gameIConHeight = gameAreaHeight / 4; // the height of icons are equal
                coins = 100; // reset coins value
                waves = 1;

                // reset error value
                NetworkAccessLayerERROR = false;
                InternetLayerERROR = false;
                TransportLayerERROR = false;
                ApplicationLayerERROR = false;
                errorExists = false;

                performancePercentage = 0;
                startVisible = false;
            }
            update(){
                consolg.log("main class");
                if(NetworkAccessLayerERROR || InternetLayerERROR || TransportLayerERROR || ApplicationLayerERROR){
                    errorExists = true;
                    consolg.log("error exists");
                }else{
                    errorExists = false;
                }
            }
        }
        class TopBar extends Phaser.Scene {
            constructor() {
                super({
                    key: 'TopBar',
                    active: true
                })
            }

            preload() {
                this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
            }
            create() {
                // put TopBar on the lowest layer
                this.scene.moveAbove(BackgroundShade);
                
                let graphics = this.add.graphics();
                graphics.fillStyle(0x6b2500, 1);

                // top bar
                graphics.fillRect(leftMargin, topMargin, gameAreaWidth, topBarHeight);

                // curent time
                currentTime =
                    this.add.bitmapText(leftMargin + componentMargin, topBarHeight / 2 - 5, 'atari', 'XX:YY:ZZ').setScale(0.5);

                // performance bar
                // text
                this.add.bitmapText(leftMargin + componentMargin + 300, topBarHeight / 2 - 5, 'atari', 'PERFORMANCE').setScale(0.5);
                // percentage
                currentPerformance = this.add.bitmapText(leftMargin + componentMargin + 1150, topBarHeight / 2 - 5, 'atari', '??%').setScale(0.5);
                // performance bar
                // background
                graphics.fillStyle(0xffffff, 1);
                graphics.fillRect(leftMargin + componentMargin + 680, topMargin + topBarHeight / 5 - 5, 450, topBarHeight - 20);

                
            }

            update() {
                // update current time
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                currentTime.setText(time);

                // update percentage

                var performanceTxt;
                // formating: xxx%
                if (performancePercentage < 10) performanceTxt = "00" + performancePercentage.toString() + "%";
                else if (performancePercentage < 100) performanceTxt = "0" + performancePercentage.toString() + "%";
                else performanceTxt = performancePercentage.toString() + "%";
                // allowed range: 0 - 100
                if (performancePercentage < 0) performancePercentage = 0;
                if (performancePercentage > 100) performancePercentage = 100;

                currentPerformance.setText(performanceTxt);

                // update performance bar
                var progressBar = this.add.graphics();

                var color;
                if (performancePercentage == 0) color = '0xff0000';
                else if (performancePercentage < 10) color = '0xff3300';
                else if (performancePercentage < 20) color = '0xff6600';
                else if (performancePercentage < 30) color = '0xff9500';
                else if (performancePercentage < 40) color = '0xffbb00';
                else if (performancePercentage < 50) color = '0xffea00';
                else if (performancePercentage < 60) color = '0xe5ff00';
                else if (performancePercentage < 70) color = '0xaaff00';
                else if (performancePercentage < 80) color = '0x73ff00';
                else if (performancePercentage < 90) color = '0x00ff00';
                else if (performancePercentage <= 100) color = '0x00ff6a';
                progressBar.fillStyle(color, 0.8);

                // hide the previous rectangle
                if (startVisible)
                    bar.setVisible(false);

                // change width
                var barWidth;
                if (performancePercentage > 0 && performancePercentage <= 100)
                    barWidth = performancePercentage * 4.3;
                bar = progressBar.fillRect(leftMargin + componentMargin + 690, topMargin + topBarHeight / 5, barWidth, topBarHeight - 30);
                startVisible = true; // start hiding the previous rectangle after the first rectangle is created

            }

        }

        class BottomBar extends Phaser.Scene {
            constructor() {
                super({
                    key: 'BottomBar',
                    active: true
                })
                

            }
            preload() {
                this.load.image('coinIcon', 'assets/image/coins2.png');
                this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
                this.load.image('blueFlag', 'assets/image/blue-flag.png');

            }

            create() {
                this.scene.moveAbove(BackgroundShade);
                
                let graphics = this.add.graphics();
                graphics.fillStyle(0x6b2500, 1);

                // bottom bar
                graphics.fillRect(leftMargin, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin, gameAreaWidth, topBarHeight);

                this.scene.moveAbove(Background); // set the bottom bar on the lowest layer, so that it'll never covering other layers


                // coins indicater
                    // Text
                    coinsTxt =
                        this.add.bitmapText(gameAreaWidth - 300, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 10, 'atari', '123');
                    coinsTxt.setScale(textScale);
                    // icon
                    this.add.image(
                        gameAreaWidth-340, topMargin + gameAreaHeight + componentMargin * 2 + 105, 'coinIcon').setScale(coinIconScale);

                // coin reward events
                coinsRewardEvent = this.time.addEvent({ delay: 500, callback: coinsReward, callbackScope: this, repeat: Infinity });
                
                // waves icon
                this.add.image(
                        gameAreaWidth-650, topMargin + gameAreaHeight + componentMargin * 2 + 105, 'blueFlag').setScale(0.2);
                wavesTxt = this.add.bitmapText(
                        gameAreaWidth-620, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 13, 'atari', 'Wave:N').setScale(0.6);
            }

            update() {
                coinsHandler();
                waveHandler();
            }
        }

        class Setting extends Phaser.Scene {
            constructor() {
                super({
                    key: 'Setting',
                    active: true
                })
            }
            preload() {
                this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
                this.load.image('settingIcon', 'assets/image/setting.png');
            }
            create() {
                this.scene.sendToBack();
                this.scene.moveAbove('TopBar');
                
                // the menu bring to top when clicked within the area
                this.add.zone(screenWidth / 2 - screenWidth / 4, screenHeight / 2 - screenHeight / 4, screenWidth / 2, screenHeight / 2)
                    .setInteractive()
                    .setOrigin(0)
                    .on('pointerdown', () => {
                            this.scene.bringToTop();
                });
                
                var settingOpened = false;
                
                let graphics = this.add.graphics();
                graphics.fillStyle(0xc4c4c4, 1);
                graphics.fillRoundedRect(screenWidth / 2 - screenWidth / 4, screenHeight / 2 - screenHeight / 4, screenWidth / 2, screenHeight / 2);

                // setting icon
                this.add.image(gameAreaWidth - 250, topMargin + 35, 'settingIcon', 1)
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.scene.bringToTop();
                        settingOpened = true;
                    })
                    .setScale(0.075);

                // setting text
                this.add.bitmapText(gameAreaWidth - 220, topMargin + 20, 'atari', 'Setting')
                    .setInteractive()
                    .on('pointerdown', () => { this.scene.bringToTop() })
                    .setScale(textScale / 1.5);

                // About Us
                this.add.bitmapText(3 * screenWidth / 8 + 50, 2 * screenHeight / 8 + 10, 'atari', 'About Us').setScale(textScale);
                this.add.bitmapText(3 * screenWidth / 8 - 220, 2 * screenHeight / 8 + 60, 'atari', '*---------------------------*').setScale(textScale / 1.5);
                this.add.bitmapText(3 * screenWidth / 8 - 230, 2 * screenHeight / 8 + 130, 'atari', 'Developed\nBy').setScale(textScale / 1.5);
                this.add.bitmapText(3 * screenWidth / 8 + 50, 2 * screenHeight / 8 + 100, 'atari', 'Ng Hoi Wa\nMak Long Fung\nYu Hin Chung,Nikko').setScale(textScale / 1.3).setCenterAlign();
                this.add.bitmapText(3 * screenWidth / 8 - 120, 2 * screenHeight / 8 + 260, 'atari', '*---------------------*').setScale(textScale / 1.5).setCenterAlign();
                this.add.bitmapText(3 * screenWidth / 8 - 230, 2 * screenHeight / 8 + 310, 'atari', 'Developed\nFor').setScale(textScale / 1.5);
                this.add.bitmapText(3 * screenWidth / 8 + 50, 2 * screenHeight / 8 + 310, 'atari', 'SD3985\nSD3985 COMPUTER GAME \nDEVELOPMENT').setScale(textScale / 1.5).setCenterAlign();
                this.add.bitmapText(3 * screenWidth / 8 - 120, 2 * screenHeight / 8 + 430, 'atari', '*---------------------*').setScale(textScale / 1.5).setCenterAlign();

                // close button
                this.add.bitmapText(3 * screenWidth / 8 - 50, 2 * screenHeight / 8 + 460, 'atari', '-> Go Back')
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.scene.moveAbove('TopBar');
                        settingOpened = false;
                    })
                    .setScale(textScale);

            }
            update() {
                // setting menu
                /*
                let backgroundBlur = this.add.graphics();
                backgroundBlur.fillStyle(0x000000, 0.5);
                backgroundBlur.fillRect(0, 0, screenWidth, screenHeight);
                backgroundBlur.setVisible(true);
                */
            }
        }

        class ShoppingCart extends Phaser.Scene {
            constructor() {
                super({
                    key: 'shoppingCart',
                    active: true
                })
                gameItems.push(["So good", 100],
                               //["ABC", 200],
                               //["HAHA", 1020],
                              );
            }
            preload() {
                this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
                this.load.image('shoppingCartIcon', 'assets/image/shopping-cart.png');
            }

            create() {
                this.scene.moveAbove(BottomBar);
                
                // the menu bring to top when clicked within the area
                this.add.zone(leftMargin + componentMargin,topMargin + topBarHeight + gameAreaHeight / 3, gameAreaWidth / 1.5, gameAreaHeight / 1.5)
                    .setInteractive()
                    .setOrigin(0)
                    .on('pointerdown', () => {
                            this.scene.bringToTop();
                });
                
                let graphics = this.add.graphics();
                graphics.fillStyle(0xc4c4c4, 1);

                // shopping cart menu
                graphics.fillRoundedRect(leftMargin + componentMargin, topMargin + topBarHeight + gameAreaHeight / 3, gameAreaWidth / 1.5, gameAreaHeight / 1.5);
                
                // title
                this.add.bitmapText(100,gameAreaHeight / 2.3,'atari', "SHOPPING CART").setScale(0.5);
                this.add.bitmapText(60,gameAreaHeight / 2.3+20, 'atari', '*---------------------------*').setScale(textScale / 1.5);
                
                // item
                for(var i = 1; i<gameItems.length;i++){
                    // items
                    this.add.bitmapText(60,gameAreaHeight / 2.3+(i+1)*40, 'atari',
                                        //'Item: '+i+
                                        ' Name: '+gameItems[i][0]+
                                        ' Price: $'+gameItems[i][1]
                                       )
                        .setScale(textScale / 1.5);
                    
                    //buy button
                    this.add.bitmapText(950,gameAreaHeight / 2.3+(i+1)*40, 'atari','BUY ')
                        .setScale(textScale / 1.5)
                        .setInteractive()
                        .on('pointerdown', () => {
                            console.log('You bought item' + i);
                            buying(i);
                        });
                }

                // shopping cart menu - close button
                const shoppingCartCloseButton =
                    this.add.text(leftMargin + gameAreaWidth / 1.5 - 30, gameAreaHeight/3 + topBarHeight + topMargin + componentMargin + 5, "X", { font: '25px Courier', fill: '#fff' })
                        .setInteractive()
                        .on('pointerdown', () => {
                            this.scene.moveAbove('BottomBar');
                        });


                // shopping cart button
                var txtShoppingCart = this.add.bitmapText(leftMargin + 100, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 17, 'atari', 'Shopping Cart')
                    .setInteractive()
                    .on('pointerdown', () => { this.scene.bringToTop() })
                    .setScale(textScale / 1.5);

                var iconShoppingCart = this.add.image(leftMargin + 50, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 37, 'shoppingCartIcon', 1)
                    .setInteractive()
                    .on('pointerdown', () => { this.scene.bringToTop() });
            }
            refresh (){
                this.cameras.main.setPosition(this.parent.x, this.parent.y);
                this.scene.bringToTop();
            }
        }

        class Inventory extends Phaser.Scene {
            constructor() {
                super({
                    key: 'Inventory',
                    active: true
                })
            }
            preload() {
                this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
                this.load.image('inventoryIcon', 'assets/image/inventory.png');
            }

            create() {
                this.scene.moveAbove(Background);
                
                // the menu bring to top when clicked within the area
                this.add.zone(leftMargin+150 + componentMargin, topMargin + topBarHeight + gameAreaHeight / 3, gameAreaWidth / 1.5, gameAreaHeight / 1.5)
                    .setInteractive()
                    .setOrigin(0)
                    .on('pointerdown', () => {
                            this.scene.bringToTop();
                });

                
                let graphics = this.add.graphics();
                graphics.fillStyle(0x0048ff, 1);

                // Inventory cart menu
                graphics.fillRoundedRect(leftMargin+150 + componentMargin, topMargin + topBarHeight + gameAreaHeight / 3, gameAreaWidth / 1.5, gameAreaHeight / 1.5);
                
                // title
                this.add.bitmapText(250,gameAreaHeight / 2.3,'atari', "INVENTORY").setScale(0.5);
                this.add.bitmapText(210,gameAreaHeight / 2.3+20, 'atari', '*---------------------------*').setScale(textScale / 1.5);
                
                // Inventory menu - close button
                const inventoryCloseButton =
                    this.add.text(leftMargin + gameAreaWidth / 1.5 + 130, gameAreaHeight/3 + topBarHeight + topMargin + componentMargin + 5, "X", { font: '25px Courier', fill: '#fff' })
                        .setInteractive()
                        .on('pointerdown', () => {
                            this.scene.moveAbove('BottomBar')
                        });

                // Inventory button
                var txtInventory = this.add.bitmapText(leftMargin + 620, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 17, 'atari', 'Inventory')
                    .setInteractive()
                    .on('pointerdown', () => { this.scene.bringToTop() })
                    .setScale(textScale / 1.5);

                var iconInventory = this.add.image(leftMargin + 570, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 37, 'inventoryIcon', 1)
                    .setInteractive()
                    .on('pointerdown', () => { this.scene.bringToTop() })
                    .setScale(0.15);
            }

            update() {
                 // item
                for(var i = 1; i<inventory.length;i++){
                    // items
                    this.add.bitmapText(150,gameAreaHeight / 2.3+(i+1)*40, 'atari',
                                        //'Item: '+i+
                                        ' Name: '+inventory[i][0]+
                                        ' | Quantity: '+inventory[i][1]
                                       )
                        .setScale(textScale / 1.5);
                }
            }
        }
        
        class Background extends Phaser.Scene{
            constructor() {
                super({
                    key: 'Background',
                    active: true
                })
            }
            preload(){
                this.load.image('background-normal', 'assets/image/background/background-normal.png');
                this.load.image('background-error', 'assets/image/background/background-error.png');
                this.load.image('inventoryIcon', 'assets/image/inventory.png');
            }
            
            create(){
                this.scene.sendToBack();

                let graphics = this.add.graphics();
                
                var background = this.add.image(screenWidth/2,screenHeight/2,'background-normal',1).setScale(2.2);
                
                graphics.fillStyle(0xff0000, 0.5);
                graphics.fillRect(0,0,screenWidth, screenHeight);
                graphics.setVisible(true);

                
            }
            
            update(){
                
            }
        }

        class BackgroundShade extends Phaser.Scene{
            constructor() {
                super({
                    key: 'BackgroundShade',
                    active: true
                })
            }
            create(){                
                this.scene.moveAbove(Background);
            }
            update(){
            }
        }

        class SceneApplicationLayer extends Phaser.Scene {

            constructor() {
                super({
                    key: 'SceneApplicationLayer',
                    active: true,
                })
            }

            create() {
                this.scene.bringToTop();
                let graphics = this.add.graphics();

                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
                
                graphics.fillStyle(0xff9933, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
                graphics.fillRect(leftMargin + gameAreaWidth, topMargin + topBarHeight + componentMargin + 0 * gameIConHeight, gameIconWidth, gameIConHeight / 2); // game icon

                const activeButton =
                    this.add.text(leftMargin + gameAreaWidth + 5, topBarHeight + 0 * gameIConHeight + 30, "AL", { font: '50px Courier', fill: '#000' })
                        .setInteractive()
                        .on('pointerdown', () => {
                            console.log('pointerdown');
                            this.scene.bringToTop();
                        });
                
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Application Layer", { font: '50px Courier', fill: '#000' })
                
                
            }
            update() {
                let graphics = this.add.graphics();
                if (!ApplicationLayerERROR && !TransportLayerERROR && !InternetLayerERROR && !NetworkAccessLayerERROR) { // if there is no error
                    graphics.fillStyle(normalColor, 1);
                    //console.log("no error");
                } else {
                    graphics.fillStyle(errorColor, 1);
                    //console.log("error");
                }
                graphics.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3, topMargin + topBarHeight + componentMargin + 0 * gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight / 2);
            }
        }

        class SceneTransportLayer extends Phaser.Scene {

            constructor() {
                super({
                    key: 'SceneTransportLayer',
                    active: true
                });
            }

            create() {
                let graphics = this.add.graphics();
                
                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);

                graphics.fillStyle(0xff3300, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
                graphics.fillRect(leftMargin + gameAreaWidth, topMargin + topBarHeight + componentMargin + 1 * gameIConHeight, gameIconWidth, gameIConHeight / 2); // game icon

                const activeButton =
                    this.add.text(leftMargin + gameAreaWidth + 5, topBarHeight + 1 * gameIConHeight + 30, "TL", { font: '50px Courier', fill: '#000' })
                        .setInteractive()
                        .on('pointerover', () => { console.log('pointerover'); })
                        .on('pointerdown', () => {
                            console.log('pointerdown');
                            this.scene.bringToTop();
                        });
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Transport Layer", { font: '50px Courier', fill: '#000' })
            }
            update() {
                let graphics = this.add.graphics();
                if (!TransportLayerERROR && !InternetLayerERROR && !NetworkAccessLayerERROR) { // if there is no error
                    graphics.fillStyle(normalColor, 1);
                    //console.log("no error");
                } else {
                    graphics.fillStyle(errorColor, 1);
                    //console.log("error");
                }
                graphics.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3, topMargin + topBarHeight + componentMargin + 1 * gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight / 2);
            }
        }

        class SceneInternetLayer extends Phaser.Scene {            
            constructor() {
                super({
                    key: 'SceneInternetLayer',
                    active: true
                });
            }

            preload ()
            {
                this.load.image('lemming', 'assets/star.png');
                this.load.image('star', 'assets/star.png');
            }

            create() {
                //let random_boolean =  Math.random() >= 0.5;
                let number = Math.floor(Math.random() * 3) + 1; // random num 1 to 4
                var bool_check_pt = [false, false, false, false, false];
                let graphics = this.add.graphics();
                
                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
                
                graphics.fillStyle(0xffcc33, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
                graphics.fillRect(leftMargin + gameAreaWidth, topMargin + topBarHeight + componentMargin + 2 * gameIConHeight, gameIconWidth, gameIConHeight / 2); // game icon

                const activeButton =
                    this.add.text(leftMargin + gameAreaWidth + 5, topBarHeight + 2 * gameIConHeight + 30, "IL", { font: '50px Courier', fill: '#000' })
                        .setInteractive()
                        .on('pointerover', () => { console.log('pointerover'); })
                        .on('pointerdown', () => {
                            console.log('pointerdown');
                            this.scene.bringToTop();
                        });
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Internet Layer", { font: '50px Courier', fill: '#000' });

                // We define a list of points.
                var points = [
                    [], // point1
                    [], // point2
                    [], // point3
                    [], // point4
                    [], // point5
                    [], // point6
                    [], // point7
                ];    

                
                // Description: create lines for points variable.
                // Usage: [startpointx, startpointy, endpointx, endpointy]
                var point_val = [
                    [175, 180, 235, 180], // for line1
                    [175, 130, 175, 180],
                    [115, 130, 175, 130],
                    [235, 180, 295, 230],
                    [295, 230, 295, 280],
                    [115, 130, 115, 270],
                ];

                let group = this.add.group();

                group.createMultiple({ key: 'star', frame: 0, frameQantity:1, repeat: 15});
                Phaser.Actions.GridAlign(group.getChildren(), { width: 4, cellWidth: 60, cellHeight: 48, x: 132, y: 148 });
                
                var stars = group.getChildren();
                
                // (cell width, cell height)
                // 180 - 130 = 50 (cell height) approx
                // 175 - 115 = 60 (cell width) approx

                // Description: add points Vector2 to the point array
                // Usage: Specify the start points and end point in the point_val variable, don't modify the for loop.
                for (var i = 0; i < point_val.length ; i++)
                {
                    points[i].push(new Phaser.Math.Vector2(point_val[i][0], point_val[i][1]));
                    points[i].push(new Phaser.Math.Vector2(point_val[i][2], point_val[i][3]));
                }


                // Create curve variable to draw curves
                var curve = [];

                for (var i =0; i < point_val.length; i++)
                    curve.push(new Phaser.Curves.Spline(points[i]));

                //var graphics = this.add.graphics();

                graphics.lineStyle(1, 0xffffff, 1);

                graphics.fillStyle(0x00ff00, 1);

                //  On each click, draw a line
                this.input.on('pointerup', function (event) {

                    if(checkpoint())
                        return;
                    number = Math.floor(Math.random() * 6); // random num 1 to 5
                    console.log(number);

                    switch (number){
                        case 0:
                            curve[0].draw(graphics, 64);
                            bool_check_pt[0] = true;
                            break;
                        case 1:
                            curve[1].draw(graphics, 64);
                            bool_check_pt[1] = true;
                            break;
                        case 2:
                            curve[2].draw(graphics, 64);
                            bool_check_pt[2] = true;
                            break;
                        case 3:
                            curve[3].draw(graphics, 64);
                            bool_check_pt[3] = true;
                            break;
                        case 4:
                            curve[4].draw(graphics, 64);
                            bool_check_pt[4] = true;
                            break;
                        case 5:
                            curve[5].draw(graphics, 64);
                            break;
                        default:
                            console.log("Invalid num");
                            break;
                    }

                    if (checkpoint())
                        console.log("done");


                }, this);

                function checkpoint()
                {
                    for (var i = 0; i < 5; i++)
                    {
                        if (bool_check_pt[i] == false)
                            return false;
                    }
                        return true;
                }
        
   

            }
            update() {
                let graphics = this.add.graphics();
                if (!InternetLayerERROR && !NetworkAccessLayerERROR) { // if there is no error in current layer and the downstream layers
                    graphics.fillStyle(normalColor, 1);
                    //console.log("no error");
                } else {
                    graphics.fillStyle(errorColor, 1);
                    //console.log("error");
                }
                graphics.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3, topMargin + topBarHeight + componentMargin + 2 * gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight / 2);
            }
        }

        class SceneNetworkAccessLayer extends Phaser.Scene {
            constructor() {
                super({
                    key: 'SceneNetworkAccessLayer',
                    active: true
                });
                NetworkAccessLayerERROR = false;
                
            }

            preload()
            {
                this.load.image('packet', 'assets/packet.png');
                this.load.image('mouse', 'assets/mouse.png');
                this.load.image('computer', 'assets/computer.png');
            }

            create() {
                var random_boolean = Math.random() >= 0.9;
                var number = 4//Math.floor(Math.random() * 3) + 1; // random num 1 to 4

                var points = [];
                var points2 = [];
                var rect = new Phaser.Geom.Rectangle(150, 500, 1420, 500);
            
                var sprite = [];

                // Description: create points and join them in the curve.
                // Usage: [screenpointx, screenpointy]
                var curve_point_val = [
                    [150, 540],
                    [960, 540],
                    [1420, 540],
                ];



                let error = false;
                let graphics = this.add.graphics();

                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
                
                graphics.fillStyle(0x4ef542, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
                graphics.fillRect(leftMargin + gameAreaWidth, topMargin + topBarHeight + componentMargin + 3 * gameIConHeight, gameIconWidth, gameIConHeight / 2); // game icon

                const activeButton =
                    this.add.text(leftMargin + gameAreaWidth + 5, topBarHeight + 3 * gameIConHeight + 30, "NAL", { font: '50px Courier', fill: '#000' })
                        .setInteractive()
                        .on('pointerover', () => { console.log('pointerover'); })
                        .on('pointerdown', () => {
                            console.log('pointerdown');
                            this.scene.bringToTop();
                        });
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Network Access Layer", { font: '50px Courier', fill: '#000' });

                // Computer
                var image1 = this.add.image(curve_point_val[0][0],curve_point_val[0][1], 'computer');
                var image2 = this.add.image(curve_point_val[curve_point_val.length - 1][0],curve_point_val[curve_point_val.length - 1][1], 'computer');

                // Mouse 
                for (var i = 0; i < number; i++)
                {
                        var ran = getRandomInt(curve_point_val.length);
                        sprite.push(this.add.sprite(curve_point_val[ran][0], curve_point_val[ran][1], 'mouse').setInteractive());
                }
            
                for (var i = 0 ; i < curve_point_val.length; i++)
                    points.push(new Phaser.Math.Vector2(curve_point_val[i][0], curve_point_val[i][1]));
            
                for (var i = 0 ; i < curve_point_val.length - 1; i++)
                    points2.push(new Phaser.Math.Vector2(curve_point_val[i][0], curve_point_val[i][1]));
            
                var curve = new Phaser.Curves.Spline(points);
                var curve2 = new Phaser.Curves.Spline(points2);
            
            
                graphics.lineStyle(5, 0x000000, 1);
            
                if (random_boolean)
                    curve.draw(graphics, 64);
                else
                    curve2.draw(graphics, 64);
                        
                graphics.fillStyle(0x00ff00, 1);
            
                for (var i = 0; i < points.length; i++)
                {
                    graphics.fillCircle(points[i].x, points[i].y, 4);
                }
            
                var lemming = [];
                for (var i = 0 ; i < 5 ; i++)
                {
                    lemming.push(this.add.follower(curve, curve_point_val[0][0], curve_point_val[0][1], 'packet'));
                }
                
            
            
                // On Click the star will dissapear and the star will follow the track.
                sprite[0].on('pointerdown', function (pointer) {
                    sprite[0].destroy();
                    number--;
                    if (number <= 0)
                    {
                        for (var i = 0 ; i < 5; i++)
                        lemming[i].startFollow({
                            duration: 5000,
                            positionOnPath: true,
                            repeat: 0,
                            ease: 'Linear',
                            delay: i * 70
                        });
                        if (random_boolean == false)
                        {
                            //graphics.clear();
                            graphics.lineStyle(5, 0x000000, 1);
                            curve.draw(graphics, 64);
                        }
                    }
                });
            
                    // On Click the star will dissapear and the star will follow the track.
                sprite[1].on('pointerdown', function (pointer) {
                    sprite[1].destroy();
                    number--;
                    if (number <= 0)
                    {
                        for (var i = 0 ; i < 5; i++)
                        lemming[i].startFollow({
                            duration: 5000,
                            positionOnPath: true,
                            repeat: 0,
                            ease: 'Linear',
                            delay: i * 70
                        });
                        if (random_boolean == false)
                        {
                            //graphics.clear();
                            graphics.lineStyle(5, 0x000000, 1);
                            curve.draw(graphics, 64);
                        }
                    }
                });
            
                    // On Click the star will dissapear and the star will follow the track.
                sprite[2].on('pointerdown', function (pointer) {
                    sprite[2].destroy();
                    number--;
                    if (number <= 0)
                    {
                        for (var i = 0 ; i < 5; i++)
                        lemming[i].startFollow({
                            duration: 5000,
                            positionOnPath: true,
                            repeat: 0,
                            ease: 'Linear',
                            delay: i * 70
                        });
                        if (random_boolean == false)
                        {
                            //graphics.clear();
                            graphics.lineStyle(5, 0x000000, 1);
                            curve.draw(graphics, 64);
                        }
                    }
                });
            
                    // On Click the star will dissapear and the star will follow the track.
                sprite[3].on('pointerdown', function (pointer) {
                    sprite[3].destroy();
                    number--;
                    if (number <= 0)
                    {
                        for (var i = 0 ; i < 5; i++)
                        lemming[i].startFollow({
                            duration: 5000,
                            positionOnPath: true,
                            repeat: 0,
                            ease: 'Linear',
                            delay: i * 70
                        });
                        if (random_boolean == false)
                        {
                            //graphics.clear();
                            graphics.lineStyle(5, 0x000000, 1);
                            curve.draw(graphics, 64);
                        }
                    }
                });
            }
            update() {
                let graphics = this.add.graphics();
                if (!NetworkAccessLayerERROR) { // if there is no error
                    graphics.fillStyle(normalColor, 1);
                    //console.log("no error");
                } else {
                    graphics.fillStyle(errorColor, 1);
                    //console.log("error");
                }
                graphics.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3, topMargin + topBarHeight + componentMargin + 3 * gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight / 2);
            }
        }

        class debugLayer extends Phaser.Scene {
            constructor() {
                super({
                    key: 'debugLayer',
                    active: true
                })
            }

            preload() {
                this.load.image('coinIcon', 'assets/image/coins2.png');
                this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
            }
            create() {
                let graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 1);
                
                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);

                //fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area


                // coin test
                var iconAddCoins = this.add.image(300, 300, 'coinIcon', 1)
                    .setInteractive()
                    .on('pointerdown', () => { coins += 10 })
                    .setScale(0.5);

                // Layer test
                this.add.bitmapText(gameAreaWidth / 1.5, 300, 'atari', 'AL\nTL\nIL\nNAL').setScale(textScale / 1.5);

                // make error
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 300, 'atari', 'ERROR')
                    .setInteractive().on('pointerdown', () => { 
                    ApplicationLayerERROR = true }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 330, 'atari', 'ERROR')
                    .setInteractive().on('pointerdown', () => { TransportLayerERROR = true }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 360, 'atari', 'ERROR')
                    .setInteractive().on('pointerdown', () => { InternetLayerERROR = true }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 390, 'atari', 'ERROR')
                    .setInteractive().on('pointerdown', () => { NetworkAccessLayerERROR = true }).setScale(textScale / 1.5);

                // fix error
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 300, 'atari', 'Fix')
                    .setInteractive().on('pointerdown', () => { ApplicationLayerERROR = false }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 330, 'atari', 'Fix')
                    .setInteractive().on('pointerdown', () => { TransportLayerERROR = false }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 360, 'atari', 'Fix')
                    .setInteractive().on('pointerdown', () => { InternetLayerERROR = false }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 390, 'atari', 'Fix')
                    .setInteractive().on('pointerdown', () => { NetworkAccessLayerERROR = false }).setScale(textScale / 1.5);

                // button to trigger this layer
                this.add.bitmapText(screenWidth - 200, screenHeight - 100, 'atari', 'TEST')
                    .setInteractive()
                    .on('pointerdown', () => { this.scene.bringToTop() })
                    .setScale(textScale / 1.5);

                // performance
                this.add.bitmapText(gameAreaWidth / 1.5, 690, 'atari', 'PERFORMANCE').setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 750, 'atari', '+')
                    .setInteractive().on('pointerdown', () => { performancePercentage += 5 }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 200, 750, 'atari', '-')
                    .setInteractive().on('pointerdown', () => { performancePercentage -= 5 }).setScale(textScale / 1.5);
            }

            update() { }
        }

        // debug use: 
        function testing(index){
            console.log("testing");
            console.table(gameItems);
            console.log(gameItems[index][0]);
        }
        
        // buy something
        function buying(itemIndex){
            var price = 100;
            // = gameItems[itemIndex+1][1];
            if(coinsCheck(price)){
                coins -= price;
                inventory.push(["So Good", 1]);
            }
            console.table(inventory);
        }
        
        // check if there is sufficient coins
        function coinsCheck(targetAmount){
            if(targetAmount>coins) return false
            else return true
        }
    
        // update the coins
        function coinsHandler() {
            // IT DOESN"T WORK WTF
            var prefix = "";
            if(coins<999999) prefix = ""
            else if(coins<99999) prefix = "0"
            else if(coins<9999) prefix = "00"
            else if(coins<999) prefix = "000"
            else if(coins<99) prefix = "0000"
            else if(coins<9) prefix = "00000"
            coinsTxt.setText(coins);
        }

        // reward function
        function coinsReward(){
            coins += performancePercentage;
        }

        // change coins
        function changeCoins(amount) {
            coins += amount;
        }
        
        // update the wave
        function waveHandler(){
            wavesTxt.setText("Wave:"+waves);
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }

        var config = {
            type: Phaser.AUTO,
            width: screenWidth,
            height: screenHeight,
            backgroundColor: '#00e5ff',
            scene: //sceneConfig
                [SceneApplicationLayer,
                    SceneTransportLayer,
                    SceneInternetLayer,
                    SceneNetworkAccessLayer,
                    Background,
                    BackgroundShade,
                    debugLayer,
                    MainClass,
                    TopBar,
                    BottomBar,
                    ShoppingCart,
                    Inventory,
                    Setting
                ]
        };

        let game = new Phaser.Game(config); // run the game with config