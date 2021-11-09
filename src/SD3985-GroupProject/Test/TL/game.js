
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
            //var currentTime; // current time
            var coins; // amount of coins that player own
            var coinsTxt; // amount of coins in text
            var coinsRewardEvent; // event of coins reward
            var coinsRewardInterval = 3000; // interval between coin rewards in ms (1s = 1000ms);
            var performancePercentage; // degree of performance in number
            var currentPerformance; // degree of performance in text, for update
            
            var backgroundShade; 
            
            var waves; // stage of wave
            var wavesTxt; // stage of wave in text 
            
            var service = [];
            var ApplicationLayerService
            var TransportLayerService
        }
        // error system config
        {
            var NetworkAccessLayerERROR;
            var InternetLayerERROR;
            var TransportLayerERROR;
            var ApplicationLayerERROR;
            var errorExists;
            
            var ApplicationLayer_Alert_Error;

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
		// Transport Layer variables (Added by Ambrose)
		{
		var speed = 55; //ref: 55
		var wave = 0; //should be start from 0 for wave 1
		var WaveText;
		var currentPort = 'ftp';
		var currentPortText;
		var portName = 'http';

		//skill items
		var IsPortAlgo = false;
		var IsOrderAlgo = false;
		var IsResendAlgo = false;

		//porting zone
		var portingText;
		var points = [20, 540, 295, 540]; //points for path in port zone
		var line = new Phaser.Curves.Spline(points); //attach points to a path
		var graphics; //visualize the path
		var segment; //segment to follow the path
		var port; //port image
		var portCount = 1;

		//reorder zone
		var reorderText;
		var borders;
		var block;
		var blocks;
		var blockCount = 0;
		var blockNameList = ['segment0', 'segment1', 'segment2', 'segment3', 'segment4', 
						'segment5', 'segment6', 'segment7', 'segment8', 'segment9'];
		var dragCount = 0;
		var store;
		var stores;
		var segment0_status = false;
		var segment1_status = false;
		var segment2_status = false;
		var segment3_status = false;
		var segment4_status = false;
		var segment5_status = false;
		var segment6_status = false;
		var segment7_status = false;
		var segment8_status = false;
		var segment9_status = false;
		var orderCorrect = false;
		var blockArray = ['block 0', 'block 1', 'block 2','block 3','block 4',
						'block 5','block 6','block 7','block 8','block 9'];
		var okBlockArray = ['block 0 ok', 'block 1 ok', 'block 2 ok', 'block 3 ok', 
						'block 4 ok', 'block 5 ok', 'block 6 ok', 'block 7 ok',
						'block 8 ok', 'block 9 ok'];
		var blocksOK;

		//resend zone
		var corruptBlock;
		var resent = true;
		var resendText;

		var waveClear = true;
		}
        
		
        class Preload extends Phaser.Scene{
            constructor(){
                super({
                    key: 'Preload',
                    active: true
                })
            }
            
            preload(){
                this.scene.bringToTop();
                
                var block = this.add.zone(0,0,screenWidth, screenHeight)
                    .setInteractive()
                    .setOrigin(0);
                var backgroundShade = this.add.graphics();
                    backgroundShade.fillStyle(0x111111, 0.5);
                    backgroundShade.fillRect(0,0,screenWidth,screenHeight);
                var progressBar = this.add.graphics();
                var progressBox = this.add.graphics();
                    progressBox.fillStyle(0x222222, 0.8);
                    progressBox.fillRect(screenWidth/2-220, screenHeight/2-30, 400, 50);
                var width = this.cameras.main.width;
                var height = this.cameras.main.height;
                var loadingText = this.make.text({
                        x: screenWidth/2,
                        y: screenHeight/2 - 60,
                        text: 'Loading...',
                    style: {
                        font: '70px monospace',
                        fill: '#ffffff'
                    }
                });
                loadingText.setOrigin(0.5, 0.5);

                var percentText = this.make.text({
                    x: screenWidth/2,
                    y: screenHeight/2,
                    text: '0%',
                    style: {
                        font: '50px monospace',
                        fill: '#ffffff'
                    }
                });
                percentText.setOrigin(0.5, 0.5);

                var assetText = this.make.text({
                    x: screenWidth/2,
                    y: screenHeight/2 + 60,
                    text: '',
                    style: {
                        font: '70px monospace',
                        fill: '#ffffff'
                    }
                });

                assetText.setOrigin(0.5, 0.5);

                this.load.on('progress', function (value) {
                    percentText.setText(parseInt(value * 100) + '%');
                    progressBar.clear();
                    progressBar.fillStyle(0xffffff, 1);
                    progressBar.fillRect(screenWidth/2-220, screenHeight/2-30, 400 * value, 50);
                });

                this.load.on('fileprogress', function (file) {
                    assetText.setText('Loading asset: ' + file.key);
                });

                this.load.on('complete', function () {
                    backgroundShade.destroy();
                    progressBar.destroy();
                    progressBox.destroy();
                    loadingText.destroy();
                    percentText.destroy();
                    assetText.destroy();
                    block.destroy();
                });
                
                this.load.audio('bgm', 'assets/audio/Background-Music.mp3');
                
                gameIConHeight = gameAreaHeight / 4; // the height of icons are equal
                coins = 100; // reset coins value
                waves = 10; // reset wave

                // reset error value
                NetworkAccessLayerERROR = false;
                InternetLayerERROR = false;
                TransportLayerERROR = false;
                ApplicationLayerERROR = false;
                errorExists = false;

                performancePercentage = 0;
                startVisible = false;
                
                service[0] = 'NONE';
                service[1] = 'FTP';
                service[2] = 'HTTP';
                service[3] = 'TELNET';
            }                                      
            create(){
                var bgm = this.sound.add('bgm');
                //bgm.play();
            }
            update(){
                
            }
            
        }

        class EventSystem extends Phaser.Scene{
            constructor(){
                super({
                    key: 'EventSystem',
                    active: true
                })
            }
            preload(){
                this.counter = 0; // counter for application layer error
            }
            create(){
                ApplicationLayer_Alert_Error = false;
            }
            update(){
                console.log("ApplicationLayer_Alert_Error " + ApplicationLayer_Alert_Error)
                
                // Application Layer Error
                    if(ApplicationLayer_Alert_Error){
                        this.counter = 0; // freeze the timer when there is an alert error -> stop changing service
                    }else if(!ApplicationLayer_Alert_Error){
                        // create service mismatch error
                        if(this.counter == 6000/waves) {
                            changeService();   
                        }
                        // create alert error
                        if(this.counter == 9000/waves) {
                            ApplicationLayer_Alert_Error = true
                            this.counter = 0; // reset 
                        }
                        
                    }
                    this.counter += 1; // counter increase anyway
                
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
                this.scene.moveAbove(Background);
                
                let graphics = this.add.graphics();
                graphics.fillStyle(0x6b2500, 1);

                // top bar
                graphics.fillRect(leftMargin, topMargin, gameAreaWidth, topBarHeight);

                // curent time
                this.currentTime =
                    this.add.bitmapText(leftMargin + componentMargin, topBarHeight / 2 - 5, 'atari', 'XX:YY:ZZ').setScale(0.5);

                // performance
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
                this.currentTime.setText(time);

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
                this.scene.moveAbove(Background);
                
                let graphics = this.add.graphics();
                graphics.fillStyle(0x6b2500, 1);

                // bottom bar
                graphics.fillRect(leftMargin, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin, gameAreaWidth, topBarHeight);

                this.scene.moveAbove(Background); // set the bottom bar on the lowest layer, so that it'll never covering other layers

                // waves icon
                this.add.image(
                        gameAreaWidth/2-100, topMargin + gameAreaHeight + componentMargin * 2 + 105, 'blueFlag').setScale(0.2);
                wavesTxt = this.add.bitmapText(
                        gameAreaWidth/2-70, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 13, 'atari', 'Wave:N').setScale(0.6);

                // coins indicater
                    // icon
                    this.add.image(
                        gameAreaWidth/2+240, topMargin + gameAreaHeight + componentMargin * 2 + 105, 'coinIcon').setScale(coinIconScale);
                    // Text
                    coinsTxt =
                        this.add.bitmapText(gameAreaWidth/2+265, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 10, 'atari', '123');
                    coinsTxt.setScale(textScale);
                    

                // coin reward events
                coinsRewardEvent = this.time.addEvent({ delay: 500, callback: coinsReward, callbackScope: this, repeat: Infinity });
                
                
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
                //this.load.audio('bass', ['assets/audio/bass.mp3', 'assets/audio/bass.ogg']);
                //this.load.audio('bgm', 'assets/audio/Background-Music.mp3');
                this.load.audio('click-3', 'assets/audio/clicking-3.mp3');
                
            }
            create() {
                this.scene.sendToBack();
                this.scene.moveAbove('TopBar');
                
                var click = this.sound.add('click-3');
                
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

                // setting button - icon
                this.add.image(gameAreaWidth - 250, topMargin + 35, 'settingIcon', 1)
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => {
                        this.scene.bringToTop();
                        click.play();
                        settingOpened = true;
                    })
                    .setScale(0.075);

                // setting button -text
                this.add.bitmapText(gameAreaWidth - 220, topMargin + 20, 'atari', 'Setting')
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => {
                        this.scene.bringToTop();
                        click.play();
                        settingOpened = true;
                        
                    })
                    .setScale(textScale / 1.5);

                // About Us
                this.add.bitmapText(3 * screenWidth / 8 + 50, 2 * screenHeight / 8 + 10, 'atari', 'Setting').setScale(textScale);
                this.add.bitmapText(3 * screenWidth / 8 - 220, 2 * screenHeight / 8 + 60, 'atari', '*---------------------------*').setScale(textScale / 1.5);

                // close button
                this.add.bitmapText(3 * screenWidth / 8 - 50, 2 * screenHeight / 8 + 460, 'atari', '-> Go Back')
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => {
                        this.scene.moveAbove('TopBar');
                        settingOpened = false;
                        click.play();
                    })
                    .setScale(textScale);

            }
            update() {
                //console.log("Setting Status: " + settingOpened);
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
                this.load.audio('click-2', 'assets/audio/clicking-2.mp3');
            }

            create() {
                this.scene.moveAbove(BottomBar);
            
                var click = this.sound.add('click-2');
                
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
                        .setInteractive({useHandCursor: true})
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
                // text button
                var txtShoppingCart = this.add.bitmapText(leftMargin + 100, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 17, 'atari', 'Market')
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => { 
                        this.scene.bringToTop();
                        click.play();
                    })
                    .setScale(textScale / 1.5);
                // image button
                var iconShoppingCart = this.add.image(leftMargin + 50, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 37, 'shoppingCartIcon', 1)
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => {
                        this.scene.bringToTop();
                        click.play();
                    });
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
                this.load.audio('click-2', 'assets/audio/clicking-2.mp3');
            }

            create() {
                this.scene.moveAbove(Background);
                
                var click = this.sound.add('click-2');
                
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
                        .setInteractive({useHandCursor: true})
                        .on('pointerdown', () => {
                            this.scene.moveAbove('BottomBar')
                        });

                // Inventory button
                var txtInventory = this.add.bitmapText(leftMargin + 360, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 17, 'atari', 'Inventory')
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => { 
                        this.scene.bringToTop();
                        click.play();
                    })
                    .setScale(textScale / 1.5);

                var iconInventory = this.add.image(leftMargin + 330, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 37, 'inventoryIcon', 1)
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => { 
                        this.scene.bringToTop();
                        click.play();
                    })
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

        class Info extends Phaser.Scene{
            constructor() {
                super({
                    key: 'Info',
                    active: true
                })
            }
            preload(){
                this.load.image('infoIcon','assets/image/layers-icon.png')
                this.load.audio('click-2', 'assets/audio/clicking-2.mp3');
            }
            create(){
                this.scene.moveAbove(BottomBar);
                
                var click = this.sound.add('click-2');
                
                let graphics = this.add.graphics();
                graphics.fillStyle(0xc4c4c4, 1);
                graphics.fillRoundedRect(screenWidth / 2 - screenWidth / 4, screenHeight / 2 - screenHeight / 4, screenWidth / 2, screenHeight / 2);

                // info button - icon
                this.add.image(gameAreaWidth - 180, topMargin + gameAreaHeight + 2*componentMargin+100, 'infoIcon', 1)
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => {
                        this.scene.bringToTop();
                        click.play();
                        settingOpened = true;
                    })
                    .setScale(0.06);

                // info button - text
                this.add.bitmapText(gameAreaWidth - 150, topMargin + gameAreaHeight + 2*componentMargin+85, 'atari', 'Info')
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => {
                        this.scene.bringToTop();
                        click.play();
                    })
                    .setScale(textScale / 1.3);

                // About Us
                this.add.bitmapText(3 * screenWidth / 8 - 110, 2 * screenHeight / 8 + 10, 'atari', 'Info - About Us').setScale(textScale);
                this.add.bitmapText(3 * screenWidth / 8 - 220, 2 * screenHeight / 8 + 60, 'atari', '*---------------------------*').setScale(textScale / 1.5);
                this.add.bitmapText(3 * screenWidth / 8 - 230, 2 * screenHeight / 8 + 130, 'atari', 'Developed\nBy').setScale(textScale / 1.5);
                this.add.bitmapText(3 * screenWidth / 8 + 50, 2 * screenHeight / 8 + 100, 'atari', 'Ng Hoi Wa\nMak Long Fung\nYu Hin Chung,Nikko').setScale(textScale / 1.3).setCenterAlign();
                this.add.bitmapText(3 * screenWidth / 8 - 120, 2 * screenHeight / 8 + 260, 'atari', '*---------------------*').setScale(textScale / 1.5).setCenterAlign();
                this.add.bitmapText(3 * screenWidth / 8 - 230, 2 * screenHeight / 8 + 310, 'atari', 'Developed\nFor').setScale(textScale / 1.5);
                this.add.bitmapText(3 * screenWidth / 8 + 50, 2 * screenHeight / 8 + 310, 'atari', 'SD3985\nSD3985 COMPUTER GAME \nDEVELOPMENT').setScale(textScale / 1.5).setCenterAlign();
                this.add.bitmapText(3 * screenWidth / 8 - 120, 2 * screenHeight / 8 + 430, 'atari', '*---------------------*').setScale(textScale / 1.5).setCenterAlign();

                // close button
                this.add.bitmapText(3 * screenWidth / 8 - 50, 2 * screenHeight / 8 + 460, 'atari', '-> Go Back')
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => {
                        this.scene.moveAbove('BottomBar');
                        click.play();
                    })
                    .setScale(textScale);
            }
        }

        class Links extends Phaser.Scene{
            constructor(){
                super({
                    key: 'Links',
                    active: true
                })
            }
            create(){
                this.scene.sendToBack();
                this.scene.moveAbove(Background);
            }
            update(){
                let firstLink = this.add.graphics();
                let secondLink = this.add.graphics();
                let thirdLink = this.add.graphics();
                let foruthLink = this.add.graphics();
                
                firstLink.fillStyle(normalColor, 1);   
                secondLink.fillStyle(normalColor, 1); 
                thirdLink.fillStyle(normalColor, 1);
                foruthLink.fillStyle(normalColor, 1);
                
                if(ApplicationLayerERROR || ApplicationLayer_Alert_Error){
                    firstLink.fillStyle(errorColor, 1);   
                }
                else if(TransportLayerERROR){
                    firstLink.fillStyle(errorColor, 1);   
                    secondLink.fillStyle(errorColor, 1); 
                }
                else if(InternetLayerERROR){
                    firstLink.fillStyle(errorColor, 1);   
                    secondLink.fillStyle(errorColor, 1); 
                    thirdLink.fillStyle(errorColor, 1);
                }
                else if(NetworkAccessLayerERROR){
                    firstLink.fillStyle(errorColor, 1);   
                    secondLink.fillStyle(errorColor, 1); 
                    thirdLink.fillStyle(errorColor, 1);
                    foruthLink.fillStyle(errorColor, 1);
                }
                else{
                    firstLink.fillStyle(normalColor, 1);   
                    secondLink.fillStyle(normalColor, 1); 
                    thirdLink.fillStyle(normalColor, 1);
                    foruthLink.fillStyle(normalColor, 1);
                }
                
                firstLink.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3 + 40, topMargin + topBarHeight + componentMargin + 0 *   gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight);
                secondLink.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3 + 40, topMargin + topBarHeight + componentMargin + 1 *     gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight);
                thirdLink.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3 + 40, topMargin + topBarHeight + componentMargin + 2 * gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight);
                foruthLink.fillRect(leftMargin + gameAreaWidth + gameIconWidth / 3 + 40, topMargin + topBarHeight + componentMargin + 3 * gameIConHeight + gameIConHeight / 2, gameIconWidth / 4, gameIConHeight);
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

                //let graphics = this.add.graphics();
                
                this.backgroundNORMAL = this.add.image(screenWidth/2,screenHeight/2,'background-normal',1).setScale(2.2);
                
                this.backgroundERROR = this.add.image(screenWidth/2,screenHeight/2,'background-error',1).setScale(2.2).setVisible(false);   
            }
            update(){
                if( NetworkAccessLayerERROR || InternetLayerERROR || TransportLayerERROR || ApplicationLayerERROR || ApplicationLayer_Alert_Error){
                    this.backgroundERROR.setVisible(true);
                }else{
                    this.backgroundERROR.setVisible(false);
                }
            }
        }

        class SceneApplicationLayer extends Phaser.Scene {
            constructor() {
                super({
                    key: 'SceneApplicationLayer',
                    active: true
                })
            }

            preload(){
                this.load.image('computerIcon', 'assets/image/Application-Layer/Computer.png');
                this.load.image('Service-YouTube', 'assets/image/Application-Layer/YouTube.png')
                this.load.image('Service-FTP','assets/image/Application-Layer/FTP.png');
                this.load.image('Service-Telnet','assets/image/Application-Layer/Telnet.png');
                this.load.image('Service-FTP-Icon','assets/image/Application-Layer/FTP_icon.png');
                this.load.image('Service-NoService', 'assets/image/Application-Layer/Home.png');
                this.load.image('Service-YouTube-Icon','assets/image/Application-Layer/YouTube_icon.png')
                this.load.image('Service-Telnet-Icon','assets/image/Application-Layer/telnet_icon.png')
                
                this.load.image('Alert-WindowsUpdate','assets/image/Application-Layer/Alert-WindowsUpdate.png')
                
                this.load.audio('click', 'assets/audio/clicking-1.mp3');
                
            }
            create() {
                
                this.scene.moveBelow(Preload, SceneApplicationLayer);
                let graphics = this.add.graphics();
                var click = this.sound.add('click');

                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
                
                graphics.fillStyle(0xff9933, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
                //graphics.fillRect(leftMargin + gameAreaWidth, topMargin + topBarHeight + componentMargin + 0 * gameIConHeight, gameIconWidth, gameIConHeight / 2); // game icon
                
                // game icon
                this.add.image(leftMargin + gameAreaWidth+90, topMargin + topBarHeight + componentMargin + 0 * gameIConHeight+20, 'computerIcon', 1)
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => { 
                    this.scene.bringToTop();
                    click.play();  
                })
                .setScale(0.3);
                
                // layer name text
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Application Layer", { font: '50px Courier', fill: '#000' })
                
                // Application Screen
                this.NoService = this.add.image(810, gameAreaHeight/2+112, 'Service-NoService',1).setScale(0.625).setVisible(false);
                this.YouTube = this.add.image(810, gameAreaHeight/2+110, 'Service-YouTube', 1).setScale(0.625).setVisible(false);
                this.FTP = this.add.image(810, gameAreaHeight/2+112, 'Service-FTP',1).setScale(0.625).setVisible(false);
                this.Telnet = this.add.image(810, gameAreaHeight/2+90, 'Service-Telnet',1).setScale(0.625).setVisible(false);
                
                // Application icon
                this.YouTube_Icon = this.add.image(leftMargin + gameAreaWidth+90,topMargin + topBarHeight - 10,'Service-YouTube-Icon',1).setScale(0.075).setVisible(false);
                this.FTP_Icon = this.add.image(leftMargin + gameAreaWidth+90,topMargin + topBarHeight - 10,'Service-FTP-Icon',1).setScale(0.15).setVisible(false);
                this.Telnet_Icon = this.add.image(leftMargin + gameAreaWidth+90,topMargin + topBarHeight - 10,'Service-Telnet-Icon',1).setScale(0.25).setVisible(false);
                
                // default layer
                ApplicationLayerService = service[3];
                
                // Windows Update Error
                this.Alert_Windows_Update = this.add.image(leftMargin + gameAreaWidth/2, 2 * componentMargin + topBarHeight + gameAreaHeight/2, 'Alert-WindowsUpdate').setScale(1.5).setVisible(false).setActive(false);

                this.Alert_Windows_Update_Restart = this.add.zone(leftMargin + gameAreaWidth/2 - 50, 2 * componentMargin + topBarHeight + gameAreaHeight/2 + 70, 180, 51).setInteractive({useHandCursor: true}).setOrigin(0)
                        .on('pointerdown', () => { 
                        console.log("Restart Now");
                    });

                this.Alert_Windows_Update_Close = this.add.zone(leftMargin + gameAreaWidth/2 + 155, 2 * componentMargin + topBarHeight + gameAreaHeight/2 + 70, 177, 51).setInteractive({useHandCursor: true}).setOrigin(0)
                        .on('pointerdown', () => { 
                        console.log("Cancel");
                        ApplicationLayer_Alert_Error = false;
                    });
                
                
            }
            update() {
                if(ApplicationLayer_Alert_Error){
                    this.Alert_Windows_Update.setVisible(true).setActive(true);
                    this.Alert_Windows_Update_Restart.setVisible(true).setActive(true);
                    this.Alert_Windows_Update_Close.setVisible(true).setActive(true);
                }else if(!ApplicationLayer_Alert_Error){
                    this.Alert_Windows_Update.setVisible(false).setActive(false);
                    this.Alert_Windows_Update_Restart.setVisible(false).setActive(false);
                    this.Alert_Windows_Update_Close.setVisible(false).setActive(false);
                }
                
                if(ApplicationLayerService == service[0]){ // no service
                    this.NoService.setVisible(true);
                    this.YouTube.setVisible(false);  
                    this.YouTube_Icon.setVisible(false); 
                    this.FTP.setVisible(false); 
                    this.FTP_Icon.setVisible(false);
                    this.Telnet_Icon.setVisible(false);
                    this.Telnet.setVisible(false);
                }
                else if(ApplicationLayerService == service[1]){ // ftp
                    this.NoService.setVisible(false);
                    this.YouTube.setVisible(false);  
                    this.YouTube_Icon.setVisible(false); 
                    this.FTP.setVisible(true);  
                    this.FTP_Icon.setVisible(true);
                    this.Telnet_Icon.setVisible(false);
                    this.Telnet.setVisible(false);
                }
                else if(ApplicationLayerService == service[2]){ // html
                    this.NoService.setVisible(false);
                    this.YouTube.setVisible(true);  
                    this.YouTube_Icon.setVisible(true); 
                    this.FTP.setVisible(false);  
                    this.FTP_Icon.setVisible(false);
                    this.Telnet_Icon.setVisible(false);
                    this.Telnet.setVisible(false);
                } 
                else if(ApplicationLayerService == service[3]){ // telnet
                    this.NoService.setVisible(false);
                    this.YouTube.setVisible(false);  
                    this.YouTube_Icon.setVisible(false); 
                    this.FTP.setVisible(false);  
                    this.FTP_Icon.setVisible(false);
                    this.Telnet_Icon.setVisible(true);
                    this.Telnet.setVisible(true);
                }
                
            }
        }
		
        class SceneTransportLayer extends Phaser.Scene {
            constructor() {
                super({
                    key: 'SceneTransportLayer',
                    active: true
                });
            }
                
            preload(){
                this.load.image('truckIcon','assets/image/transport-layer/truck.png')
                this.load.audio('click', 'assets/audio/clicking-1.mp3')
                TransportLayerService = 'HTTP';
				
				//Added by Ambrose
				this.load.image('background', 'assets/image/transport-layer/background_test.png');
				this.load.spritesheet('port', 'assets/image/transport-layer/port_sprite.png', { frameWidth: 70, frameHeight: 45 });
				this.load.image('segmentIn', 'assets/image/transport-layer/segment_In.png');
				this.load.image('segment0', 'assets/image/transport-layer/segment0.png');
				this.load.image('segment1', 'assets/image/transport-layer/segment1.png');
				this.load.image('segment2', 'assets/image/transport-layer/segment2.png');
				this.load.image('segment3', 'assets/image/transport-layer/segment3.png');
				this.load.image('segment4', 'assets/image/transport-layer/segment4.png');
				this.load.image('segment5', 'assets/image/transport-layer/segment5.png');
				this.load.image('segment6', 'assets/image/transport-layer/segment6.png');
				this.load.image('segment7', 'assets/image/transport-layer/segment7.png');
				this.load.image('segment8', 'assets/image/transport-layer/segment8.png');
				this.load.image('segment9', 'assets/image/transport-layer/segment9.png');
				this.load.image('segment0_ok', 'assets/image/transport-layer/segment0_ok.png');
				this.load.image('segment1_ok', 'assets/image/transport-layer/segment1_ok.png');
				this.load.image('segment2_ok', 'assets/image/transport-layer/segment2_ok.png');
				this.load.image('segment3_ok', 'assets/image/transport-layer/segment3_ok.png');
				this.load.image('segment4_ok', 'assets/image/transport-layer/segment4_ok.png');
				this.load.image('segment5_ok', 'assets/image/transport-layer/segment5_ok.png');
				this.load.image('segment6_ok', 'assets/image/transport-layer/segment6_ok.png');
				this.load.image('segment7_ok', 'assets/image/transport-layer/segment7_ok.png');
				this.load.image('segment8_ok', 'assets/image/transport-layer/segment8_ok.png');
				this.load.image('segment9_ok', 'assets/image/transport-layer/segment9_ok.png');
				this.load.image('segmentStore', 'assets/image/transport-layer/segment_store.png');
				this.load.image('orderZone', 'assets/image/transport-layer/orderZone.png');
				this.load.image('borderV', 'assets/image/transport-layer/orderZone_borderV.png');
				this.load.image('borderH', 'assets/image/transport-layer/orderZone_borderH.png');
				this.load.image('portALGO', 'assets/image/transport-layer/porting_algo.png');
				this.load.image('orderALGO', 'assets/image/transport-layer/order_algo.png');
				this.load.image('resendALGO', 'assets/image/transport-layer/resend_algo.png');
				//End here
            }
            
            create() {
				{
                let graphics = this.add.graphics();
                
                var click = this.sound.add('click');
                
                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);

                graphics.fillStyle(0xff3300, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
        
                const activeButton =
                     this.add.image(leftMargin + gameAreaWidth+90, topMargin + topBarHeight + componentMargin + 1.2 * gameIConHeight+20, 'truckIcon', 1)
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => { 
                        this.scene.bringToTop();
                        click.play();
                    })
                    .setScale(0.14);
                
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Transport Layer", { font: '50px Courier', fill: '#000' });
                
                /*
                // debug
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 300, 'atari', 'ERROR')
                    .setInteractive().on('pointerdown', () => { TransportLayerERROR = true }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 300, 'atari', 'Fix')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { TransportLayerERROR = false }).setScale(textScale / 1.5);
                
                
                this.temp = this.add.bitmapText(gameAreaWidth / 3-200, 500, 'atari', '')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { }).setScale(textScale / 1.5);
                   
                this.add.bitmapText(gameAreaWidth / 4 + 0*150, 400, 'atari', service[0])
                .setInteractive({useHandCursor: true}).on('pointerdown', () => { TransportLayerService = service[0] }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 4 + 1*150, 400, 'atari', service[1])
                .setInteractive({useHandCursor: true}).on('pointerdown', () => { TransportLayerService = service[1] }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 4 + 2*150, 400, 'atari', service[2])
                .setInteractive({useHandCursor: true}).on('pointerdown', () => { TransportLayerService = service[2] }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 4 + 3*150, 400, 'atari', service[3])
                .setInteractive({useHandCursor: true}).on('pointerdown', () => { TransportLayerService = service[3] }).setScale(textScale / 1.5);
				}
                */
				
				//Added by Ambrose
				this.add.image(810, 540, 'background').setScale(5/3);//create background image
				this.add.image(810, 540, 'orderZone').setScale(5/3);//create order zone
				currentPortText = this.add.text(70, 120, 'Current Service: ' + currentPort, {fontSize: '27px', fill: '#000'});
				WaveText = this.add.text(70, 150, 'Current Wave: ' + wave, {fontSize: '27px', fill: '#000'});
				portingText = this.add.text(70, 850, 'Select the \ncorrect port to allow \nthe segement come in by \nclicking the port.', {fontSize: '27px', fill: '#000'});
				reorderText = this.add.text(630, 900, 'Re-order the segments.', {fontSize: '27px', fill: '#000'});
				resendText = this.add.text(1150, 830, 'Request for resending \nby clciking the corrupted \nsegments \n(i.e. the half-sized \nsegements).', {fontSize: '27px', fill: '#000'});
				
				//create port
				makePort.call(this);
				port.on('pointerup', switchPort, this);
				
				//create order zone
				borders = this.physics.add.staticGroup();
				borders.create(810, 100, 'borderH').setScale(1 * 5/3,0.5 * 5/3).refreshBody();
				borders.create(810, 980, 'borderH').setScale(1 * 5/3,0.5 * 5/3).refreshBody();
				borders.create(540, 540, 'borderV').setScale(0.5 * 5/3,1 * 5/3).refreshBody();
				borders.create(1080, 540, 'borderV').setScale(0.5 * 5/3,1 * 5/3).refreshBody();
				
				blocks = this.physics.add.group();
				
				this.physics.add.collider(blocks, borders);
				//this.physics.add.collider(blocks, blocks); //be or not to be, that's a question.
				
				//create store block for segment in order zone
				stores = this.physics.add.staticGroup();
				for(var storeCount = 0; storeCount < 5; storeCount++)
				{
					store = stores.create(600 + 105 * storeCount, 520, 'segmentStore').setScale(5/3);
					store.name = 'store' + storeCount;
				}
				for(var storeCount = 5; storeCount < 10; storeCount++)
				{
					store = stores.create(600 + 105 * (storeCount - 5), 560, 'segmentStore').setScale(5/3);
					store.name = 'store' + storeCount;
				}
				
				blocksOK = this.physics.add.group();
				createOkBlocks.call(this);
				//End here
                
            }
            update(){
				
                console.log("TransLY: "+TransportLayerService + " AppAL: "+ApplicationLayerService);
                console.log("TEST");
                //console.log(this.TransportLayerService.localeCompare(ApplicationLayerService))
                
                if(TransportLayerService.localeCompare(ApplicationLayerService) == 0){
                    TransportLayerERROR = false
                }else{
                    TransportLayerERROR = true
                }
                   
                this.temp.setText('Current Service in this layer:' + TransportLayerService +
                    '\nCurrent Service in app layer:' + ApplicationLayerService +
                                 '\n Error: '+TransportLayerERROR );
				
				
				//Added by Ambrose
                currentPort = ApplicationLayerService;
                
				currentPortText.setText('Current Service: ' + currentPort);
				WaveText.setText('Current Wave: ' + wave);
				
				if((portName == currentPort || IsPortAlgo == true) && waveClear == true)
				{
					InPort.call(this);
					if(blockCount <= 9)
					{
						blockArray[blockCount] = blocks.create(600, 540, blockNameList[blockCount]).setScale(5/3);
						blockArray[blockCount].setInteractive();
						blockArray[blockCount].name = 'segment ' + blockCount;
						this.input.setDraggable(blockArray[blockCount]);
						blockArray[blockCount].setBounce(1);
						blockArray[blockCount].setVelocity(Math.random() * 100 + speed * wave, Math.random() * 100 + speed * wave);
						blockArray[blockCount].allowGravity = true;
						
						this.input.on('dragstart', function(pointer, obj){
							obj.setVelocity(0, 0);
							obj.body.move = false;
						});
				
						this.input.on('drag', function(pointer, obj, dragX, dragY){
							//obj.setVelocity(0, 0);
							dragX = Math.trunc(dragX);
							dragY = Math.trunc(dragY);
							//set drag position
							obj.setPosition(dragX, dragY);
							//prevent segements being dragged out the order zone
							if(dragX <= 540 || dragX >= 1080 || dragY <= 100 || dragY >= 980)
							{
								obj.setPosition(810, 540);
							}
							
							if((obj.x <= 600 + 50 && obj.x >= 600 - 50) && (obj.y <= 530 + 20 && obj.y >= 530 - 20) && obj.name == "segment 0")
							{
								console.log("Segment 0 ok");
								blockArray[0].destroy();
								okBlockArray[0].setScale(5/3);
								segment0_status = true;
								
							}
							else if((obj.x <= 600 + 105 * 1 + 50 && obj.x >= 600 + 105 * 1 - 50) && (obj.y <= 530 + 20 && obj.y >= 530 - 20) && obj.name == "segment 1")
							{
								console.log("Segment 1 ok");
								blockArray[1].destroy();
								okBlockArray[1].setScale(5/3);
								segment1_status = true;
							}
							else if((obj.x <= 600 + 105 * 2 + 50 && obj.x >= 600 + 105 * 2 - 50) && (obj.y <= 530 + 20 && obj.y >= 530 - 20) && obj.name == "segment 2")
							{
								console.log("Segment 2 ok");
								blockArray[2].destroy();
								okBlockArray[2].setScale(5/3);
								segment2_status = true;
							}
							else if((obj.x <= 600 + 105 * 3 + 50 && obj.x >= 600 + 105 * 3 - 50) && (obj.y <= 530 + 20 && obj.y >= 530 - 20) && obj.name == "segment 3")
							{
								console.log("Segment 3 ok");
								blockArray[3].destroy();
								okBlockArray[3].setScale(5/3);
								segment3_status = true;
							}
							else if((obj.x <= 600 + 105 * 4 + 50 && obj.x >= 600 + 105 * 4 - 50) && (obj.y <= 530 + 20 && obj.y >= 530 - 20) && obj.name == "segment 4")
							{
								console.log("Segment 4 ok");
								blockArray[4].destroy();
								okBlockArray[4].setScale(5/3);
								segment4_status = true;
							}
							else if((obj.x <= 600 + 50 && obj.x >= 600 - 50) && (obj.y <= 560 + 20 && obj.y >= 560 - 20) && obj.name == "segment 5")
							{
								console.log("Segment 5 ok");
								blockArray[5].destroy();
								okBlockArray[5].setScale(5/3);
								segment5_status = true;
							}
							else if((obj.x <= 600 + 105 * 1 + 50 && obj.x >= 600 + 105 * 1 - 50) && (obj.y <= 560 + 20 && obj.y >= 560 - 20) && obj.name == "segment 6")
							{
								console.log("Segment 6 ok");
								blockArray[6].destroy();
								okBlockArray[6].setScale(5/3);
								segment6_status = true;
							}
							else if((obj.x <= 600 + 105 * 2 + 50 && obj.x >= 600 + 105 * 2 - 50) && (obj.y <= 560 + 20 && obj.y >= 560 - 20) && obj.name == "segment 7")
							{
								console.log("Segment 7 ok");
								blockArray[7].destroy();
								okBlockArray[7].setScale(5/3);
								segment7_status = true;
							}
							else if((obj.x <= 600 + 105 * 3 + 50 && obj.x >= 600 + 105 * 3 - 50) && (obj.y <= 560 + 20 && obj.y >= 560 - 20) && obj.name == "segment 8")
							{
								console.log("Segment 8 ok");
								blockArray[8].destroy();
								okBlockArray[8].setScale(5/3);
								segment8_status = true;
							}
							else if((obj.x <= 600 + 105 * 4 + 50 && obj.x >= 600 + 105 * 4 - 50) && (obj.y <= 560 + 20 && obj.y >= 560 - 20) && obj.name == "segment 9")
							{
								console.log("Segment 9 ok");
								blockArray[9].destroy();
								okBlockArray[9].setScale(5/3);
								segment9_status = true;
							}
						});
				
						this.input.on('dragend', function(pointer, obj){
							obj.body.move = false;
							obj.setVelocity(Math.random() * 100 + speed * wave, Math.random() * 100 + speed * wave);
						});
						
					}
					blockCount++;
				}
				else if(portName != currentPort)
				{
					//console.log("Port not match");
				}
				
				if(segment0_status == true &&
					segment1_status == true &&
					segment2_status == true &&
					segment3_status == true &&
					segment4_status == true &&
					segment5_status == true &&
					segment6_status == true &&
					segment7_status == true &&
					segment8_status == true &&
					segment9_status == true)
				{
					console.log("ALL MATCH!!");
					orderCorrect = true;
				}
				
				if(orderCorrect == true){
					segment0_status = false;
					segment1_status = false;
					segment2_status = false;
					segment3_status = false;
					segment4_status = false;
					segment5_status = false;
					segment6_status = false;
					segment7_status = false;
					segment8_status = false;
					segment9_status = false;
					
					for (var i = 0; i < 10; i++)
					{
						okBlockArray[i].setPosition(1350, 360 + 40 * i);
					}
					
					createCorrupt.call(this);
					waveClear = false;
					
					blockCount = 0;
					orderCorrect = false;
				}
				
				if((IsOrderAlgo == true && (portName == currentPort && waveClear == true))
				|| (IsPortAlgo == true && IsOrderAlgo == true) && waveClear == true)
				{
					for (var i = 0; i < 10; i++)
					{
						okBlockArray[i].setScale(5/3);
						okBlockArray[i].setPosition(1350, 360 + 40 * i);
					}
					
					createCorrupt.call(this);
					waveClear = false;
				}
				
				if(resent == true)
					{
						if(checkClick.call(this) == true)
						{
							for(var i = 0; i < 10; i++)
							{
								okBlockArray[i].destroy();
							}
							createOkBlocks.call(this);
							resent = false;
							waveClear = true;
							wave++;
						}
					}
				
				blockMissAvoid.call(this);
				skillItems.call(this);
				//End here
            }
        }

        class SceneInternetLayer extends Phaser.Scene {
            constructor() {
                super({
                    key: 'SceneInternetLayer',
                    active: true
                });
            }
            preload(){
                this.load.image('networkIcon','assets/image/Internet-Layer/network.png')
                this.load.audio('click', 'assets/audio/clicking-1.mp3')
            }

            create() {
                let graphics = this.add.graphics();
                
                var click = this.sound.add('click');
                
                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
                
                graphics.fillStyle(0xffcc33, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area

                const activeButton =
                    this.add.image(leftMargin + gameAreaWidth+90, topMargin + topBarHeight + componentMargin + 2.5 * gameIConHeight, 'networkIcon', 1)
                    .setInteractive({useHandCursor: true})
                    .on('pointerdown', () => { 
                        this.scene.bringToTop();
                        click.play();
                    })
                    .setScale(0.35);
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Internet Layer", { font: '50px Courier', fill: '#000' })
                
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 330, 'atari', 'ERROR')
                    .setInteractive().on('pointerdown', () => { InternetLayerERROR = true }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 300, 'atari', 'Fix')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { InternetLayerERROR = false }).setScale(textScale / 1.5);
            }
            update() {
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
            preload(){
                this.load.image('deviceIcon','assets/image/Network_Access-Layer/device.png')
                this.load.audio('click', 'assets/audio/clicking-1.mp3')
            }

            create() {
                let error = false;
                let graphics = this.add.graphics();
                
                var click = this.sound.add('click');
                
                // add an area to collect all input, prevent from clicking the elements in other layer
                this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
                
                graphics.fillStyle(0x4ef542, 1);

                // fillRect(x, y, width, height)
                graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area

                this.add.image(leftMargin + gameAreaWidth+90, topMargin + topBarHeight + componentMargin + 3.5 * gameIConHeight, 'deviceIcon', 1)
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => { 
                    this.scene.bringToTop();
                    click.play();
                })
                .setScale(0.7);
                this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Network Access Layer", { font: '50px Courier', fill: '#000' });
                
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 330, 'atari', 'ERROR')
                    .setInteractive().on('pointerdown', () => { NetworkAccessLayerERROR = true }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 300, 'atari', 'Fix')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { NetworkAccessLayerERROR = false }).setScale(textScale / 1.5);
            }
            update() {
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
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { ApplicationLayerERROR = false }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 330, 'atari', 'Fix')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { TransportLayerERROR = false }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 360, 'atari', 'Fix')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { InternetLayerERROR = false }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 300, 390, 'atari', 'Fix')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { NetworkAccessLayerERROR = false }).setScale(textScale / 1.5);

                // button to trigger this layer
                this.add.bitmapText(screenWidth - 200, screenHeight - 100, 'atari', 'TEST')
                    .setInteractive()
                    .on('pointerdown', () => { this.scene.bringToTop() })
                    .setScale(textScale / 1.5);

                // performance
                this.add.bitmapText(gameAreaWidth / 1.5, 690, 'atari', 'PERFORMANCE').setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 100, 750, 'atari', '+')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { performancePercentage += 5 }).setScale(textScale / 1.5);
                this.add.bitmapText(gameAreaWidth / 1.5 + 200, 750, 'atari', '-')
                    .setInteractive({useHandCursor: true}).on('pointerdown', () => { performancePercentage -= 5 }).setScale(textScale / 1.5);
            }

            update() { }
        }

        // Change service
        function changeService(){
            var index = parseInt((Math.random() * service.length)+1);
            ApplicationLayerService = service[index];
            console.log('The service now is:' + ApplicationLayerService);
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
            if(coins<9)         prefix = "00000"
            else if(coins<99)   prefix = "0000"
            else if(coins<999)  prefix = "000"
            else if(coins<9999) prefix = "00"
            else if(coins<99999)prefix = "0"
            else if(coins<99999)prefix = ""
            coinsTxt.setText(prefix+coins);
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
            if(waves<9) wavesTxt.setText("Wave:0"+waves);
            if(waves == 10) wavesTxt.setText("Wave:"+waves);
        }
		
		//Add by Ambrose for the Transport Layer
		function makePort ()
		{
			port = this.add.image(480, 540, 'port', 0).setInteractive();
			port.setScale(5/3);
		}

		function switchPort ()
		{
			if (portCount == 1)
				{
					setPortFrame(port, portCount);
					portName = 'ftp';
                    TransportLayerService = service[1];
					console.log(portName);
					//console.log('Current Port is ' + currentPort);
					portCount = 2;
				}
				else if (portCount == 2)
				{
					setPortFrame(port, portCount);
					portName = 'telnet';
                    TransportLayerService = service[3];
					console.log(portName);
					//console.log('Current Port is ' + currentPort);
					portCount = 0;
				}
				else if (portCount == 0)
				{
					setPortFrame(port, portCount);
					portName = 'http'
                    TransportLayerService = service[2];
					console.log(portName);
					//console.log('Current Port is ' + currentPort);
					portCount = 1;
				}
		}
/*
service[0] = 'NONE';
                service[1] = 'FTP';
                service[2] = 'HTTP';
                service[3] = 'TELNET';
                */

		function setPortFrame(port, frame)
		{
			port.frame = port.scene.textures.getFrame('port', frame);
		}

		function InPort ()
		{
			//Create a segment
			segment = this.add.follower(line, 80, 540, 'segmentIn').setScale(5/3);
			//let the segment follow the line if the port matched
			//console.log(portName + " " + currentPort + " match!");
			segment.startFollow({duration: 500});
		}

		function blockMissAvoid ()
		{
			for(var i = 0; i < 10; i++)
			{
				if (blockArray[i].x <= 540 || blockArray[i].x >= 1080 || blockArray[i].y <= 100 || blockArray[i].y >= 980)
				{
					blockArray[i].setPosition(810, 540);
				}
			}
		}

		function createOkBlocks()
		{
			okBlockArray[0] = blocksOK.create(600, 520, 'segment0_ok').setScale(0);
			okBlockArray[1] = blocksOK.create(600 + 105 * 1, 520, 'segment1_ok').setScale(0);
			okBlockArray[2] = blocksOK.create(600 + 105 * 2, 520, 'segment2_ok').setScale(0);
			okBlockArray[3] = blocksOK.create(600 + 105 * 3, 520, 'segment3_ok').setScale(0);
			okBlockArray[4] = blocksOK.create(600 + 105 * 4, 520, 'segment4_ok').setScale(0);
			okBlockArray[5] = blocksOK.create(600 + 105 * 0, 560, 'segment5_ok').setScale(0);
			okBlockArray[6] = blocksOK.create(600 + 105 * 1, 560, 'segment6_ok').setScale(0);
			okBlockArray[7] = blocksOK.create(600 + 105 * 2, 560, 'segment7_ok').setScale(0);
			okBlockArray[8] = blocksOK.create(600 + 105 * 3, 560, 'segment8_ok').setScale(0);
			okBlockArray[9] = blocksOK.create(600 + 105 * 4, 560, 'segment9_ok').setScale(0);
			
			for (var i = 0; i < 10; i++)
			{
				okBlockArray[i].setInteractive();
				okBlockArray[i].name = "clicked";
				//console.log("block " + i + " name is " + okBlockArray[i].name);
			}
		}

		function createCorrupt ()
		{
			if (IsResendAlgo == true)
			{
				resent = true;
				return;
			}
			
			for (var i = 0; i < wave; i++)
			{
				corruptBlock = Math.trunc(Math.random() * 10);
				console.log(corruptBlock);
				okBlockArray[corruptBlock].setScale(0.5 * 5/3); //corrupted
				okBlockArray[corruptBlock].name = "unclicked";
				console.log("Corrupted block " + corruptBlock + " name is " + okBlockArray[corruptBlock].name);
				okBlockArray[corruptBlock].on('pointerup', function (pointer) {
					this.setScale(5/3);
					resent = true;
					this.name = "clicked";
					//console.log("Clicked corrupted block name is " + this.name);
					
				});		
			}
		}

		function checkClick ()
		{
			var clickCount = 0;
			for (var i = 0; i < 10; i++)
			{
				if (okBlockArray[i].name == "clicked")
				{
					//console.log("checked");
					clickCount++;
				}
			}
			if (clickCount >= 10)
			{
				//console.log(clickCount);
				return true;
			}
			else
			{
				return false;
			}
		}

		function skillItems ()
		{
			if (IsPortAlgo == true)
			{
				this.add.image(477, 540, 'portALGO').setScale(5/3);
			}
			if (IsOrderAlgo == true)
			{
				this.add.image(810, 540, 'orderALGO').setScale(5/3);
			}
			if (IsResendAlgo == true)
			{
				this.add.image(1350, 540, 'resendALGO').setScale(5/3);
			}
		}

        var config = {
            type: Phaser.AUTO,
            width: screenWidth,
            height: screenHeight,
            backgroundColor: '#00e5ff',
            scene: //sceneConfig
                [
                    Preload,
                    EventSystem,
                    TopBar,
                    BottomBar,
                    ShoppingCart,
                    Inventory,
                    Setting,
                    Info,
                    Links,
                    debugLayer,
                    SceneTransportLayer,
                    SceneInternetLayer,
                    SceneNetworkAccessLayer,
                    SceneApplicationLayer,
                    Background,
                ],
            pixelArt: true,
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 0 },
					debug: false
				}
			}
        };

        let game = new Phaser.Game(config); // run the game with config