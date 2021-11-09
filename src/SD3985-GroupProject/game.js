
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
    var errorBackgroundMsuic;
    var normalBackgroundMusic;
}
// information config
{
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
    var ApplicationLayerService;
    var TransportLayerService;
}
// error system config
{
    var NetworkAccessLayerERROR;
    var InternetLayerERROR;
    var TransportLayerERROR;
    var ApplicationLayerERROR;
        var ApplicationLayer_Alert_Error = false;
    var errorExists;
    var NetworkAccessLayerErrorSOLVED = false;
    var InternetLayerErrorSolved = false;
    var TransportLayerErrorSolved = false;
    var ApplicationLayerErrorSolved = false;
}
// percentage system config
{
    var bar;
    var startVisible;
}
// game items
    var gameItems = [[]];
    // [][ID, type, itemName, itemPrice, Description, Qty.(default value)]
    var inventoryChange;
    var inventory = [[]];
    // [][ID, type, itemName, itemPrice, Description, Qty.]
// debug
var visibleTest;
// Application Layer variables
{
    var applicationLayerActiveSkillItems = 0;
    var applicationLayerSkillItems_StopUpdate_Applied = false;
    var applicationLayerSkillItems_WannaCry_Applied = false;
    var applicationLayerSkillItems_WannaLaugh_Applied = false;
    var applicationLayerSkillItems_BlueDeathSpeedUp_Applied = false;
    var applicationLayerSkillItems_BlueDeathSolution_Applied = false
}
// Transport Layer variables (Added by Ambrose)
    var transportLayerExpectingSkillItems = 0;
{
    var TransportLayerWaveClear = true;
    var speed = 55; //ref: 55
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
    var resent = false;
    var resendText;
}
// Internet Layer variables (Added by Ambrose)
    var internetLayerExpectingSkillItems = 0;
{
	var costNum = 40;
	var costText;
	var remainNum = costNum;
	var currentCostText;
	var restartBtn;
	var startArray = ['', '', '', '', '', '', '', '', ''];
	var endArray = ['', '', '', '', '', '', '', '', ''];
	var routerArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var selectedRouterArray = [['', '', '', '', ''],
								['', '', '', '', ''],
								['', '', '', '', ''],
								['', '', '', '', ''],
								['', '', '', '', ''],
								['', '', '', '', ''],
								['', '', '', '', ''],
								['', '', '', '', ''],
								['', '', '', '', '']];
	var weightTextArray = [['', '', '', '', ''],
							['', '', '', '', ''],
							['', '', '', '', ''],
							['', '', '', '', ''],
							['', '', '', '', ''],
							['', '', '', '', ''],
							['', '', '', '', ''],
							['', '', '', '', ''],
							['', '', '', '', '']];
	var startPathNEArray = ['', '', '', '', '', '', '', '', ''];
	var startPathEArray = ['', '', '', '', '', '', '', '', ''];
	var startPathSEArray = ['', '', '', '', '', '', '', '', ''];
	var routerPathNArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var routerPathEArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var routerPathSArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var routerPathWArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var routerPathNEArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var routerPathSEArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var routerPathSWArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var routerPathNWArray = [['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', ''],
						['', '', '', '', '']];
	var spaceBar;
	var startNum = -1;
	var endNum = -1;
	var weight;
	var shiftPace = 200;
	var timer_IL = 0;
	var timer_break = 12;
	var currentNode = ['', '', 'start']; //x, y, (start/router/end)
	var IsRouteComplete = false;
	var performance_IL = 0;
	var IsFailure = false; //disaster
	var failureCount = 0; //max. 1 failure per wave
r errorText_IL;
	var waveClear_IL = true;
r currentWave;
	//Skill items
	var IsDurabilityUp = false;
	var IsBandwidthUp = false;
	var IsAutoRouting = false;
}
    var autoRoutingCount = 0;
    // Network Access Layer variables
        var networkAccessLayerExpectingSkillItems = 0;
        // Network Access Layer parameters
	{
		var timer_NAL = 0;
		var disasterTimer = 0; //determine when the disaters may occur
    var performanceText_IL;
		var outputSocket;
		var wires = ['', '', '', '', ''];
		//disasters
		var IsNormal = true; //no interference
		var IsMouse = false;
		var mouses = ['', '', '', '', ''];
		var IsEMF = false;
		var highFreqs = ['', '', '', '', ''];
		var twistedPairCableUP = ['', '', '', '', ''];
		var twistedPairCableLOW = ['', '', '', '', ''];
		var rubbishBin;
		var IsBitstorm = false;
		var bitstormResetBtn;
		var disasterCount = 0; //no. of disaster in a wave should not > wave number
    var disasterNow = false;
		//skill items
		var IsTwistedPairCable = false;
		var IsMousetrap = false;
		var IsVoltageRegulator = false;
		var wireToEMF;
		var wireToMouse;
		var waveClear_NAL = false;

class Preload extends Phaser.Scene{
    constructor(){
        super({
            key: 'Preload',
            active: true
        })
    }
    preload(){
        this.scene.bringToTop(); // bring the current scene to top
        var block = this.add.zone(0,0,screenWidth, screenHeight).setInteractive().setOrigin(0);
        this.load.audio('bgm', 'assets/audio/Background-Music.mp3');
        this.load.audio('errorBgm','assets/audio/Background-Music-ERROR.mp3');
        var backgroundShade = this.add.graphics();
            backgroundShade.fillStyle(0x111111, 0.95);
            backgroundShade.fillRect(0,0,screenWidth,screenHeight);
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(screenWidth/2-220, screenHeight-150, 400, 50);
        //var width = this.cameras.main.width;
        //var height = this.cameras.main.height;
        var loadingText = this.make.text({
                x: screenWidth/2,
                y: screenHeight-80,
                text: 'Loading...',
            style: {
                font: '70px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        var titleText = this.make.text({
          x:screenWidth/8,
          y:screenHeight/4,
          text: 'TCP/IP: The Nevigator!',
          style: {
            font: '150px moospace',
            fill: '#ffffff'
          }
        })
        var percentText = this.make.text({
            x: screenWidth/2,
            y: screenHeight-120,
            text: '0%',
            style: {
                font: '50px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        var assetText = this.make.text({
            x: screenWidth/2,
            y: screenHeight-180,
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
            progressBar.fillRect(screenWidth/2-220, screenHeight-150, 400 * value, 50);
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            backgroundShade.destroy();
            titleText.destroy();
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            block.destroy();
        });
        /*
        */
        gameIConHeight = gameAreaHeight / 4; // the height of icons are equal
        coins = 1000; // reset coins value
        waves = 1; // reset wave
        // reset error value
        NetworkAccessLayerERROR = false;
        InternetLayerERROR = false;
        TransportLayerERROR = false;
        ApplicationLayerERROR = false;
        errorExists = false;
        performancePercentage = 0;
        startVisible = false;
        //service[0] = 'NONE';
        service[1] = 'FTP';
        service[2] = 'HTTP';
        service[3] = 'TELNET';
    }
    create(){
        normalBackgroundMusic = this.sound.add('bgm');
        errorBackgroundMsuic = this.sound.add('errorBgm');
        normalBackgroundMusic.setLoop(true);
        errorBackgroundMsuic.setLoop(true);
        normalBackgroundMusic.setVolume(0.3);
        errorBackgroundMsuic.setVolume(0.3);
        normalBackgroundMusic.play();
        errorBackgroundMsuic.play();
    }
    update(){
        // handle different music
        if( NetworkAccessLayerERROR || InternetLayerERROR || TransportLayerERROR || ApplicationLayerERROR || ApplicationLayer_Alert_Error ){
            if(!errorBackgroundMsuic.isPlaying)errorBackgroundMsuic.play();
            normalBackgroundMusic.stop();
        }else{
            if(!normalBackgroundMusic.isPlaying)normalBackgroundMusic.play();
            errorBackgroundMsuic.stop();
        }
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
        this.oneWaveFinished; // true to start a new round
        this.numberOfErrorInOneWave = [4,4,4,6,6,6,8,8,8,10]; // number of errors in each wave
        this.errorStepsInOneWave = [[]]; // the error step
        this.errorLayerPool = [1,4];
        this.errorResolved;
        this.errorIndex = 0;
        this.errorCounter = 0;
        this.createError = false;
        this.oneWaveFinished = true; // default true, to start the first round
        this.errorResolved = false;  // default true, to start the first round
        this.temp = false;
    }
    create(){
        //ApplicationLayer_Alert_Error = true; // default false
        // dice order of error for each wave first
        this.diceErrorAndOrder();
    }
    update(){
      // if one wave is finish (or that is the first setup)
      if(this.oneWaveFinished){
        this.oneWaveFinished = false;
        this.errorIndex = 0;
        this.createError = true;
        TransportLayerErrorSolved = false;
        InternetLayerErrorSolved = false;
      }
      if(this.createError){
        this.createErrorInLayer(this.errorIndex);
      }
      if(this.errorResolved){
        this.errorResolved = false;
        performancePercentage += 3;
        ApplicationLayerErrorSolved = false;
        NetworkAccessLayerErrorSOLVED = false;
        this.errorIndex += 1;
        if(this.errorIndex < this.numberOfErrorInOneWave[waves-1]){
          this.createError = true;
        }else if(waves <= 10){
          waves += 1;
          changeService();
          TransportLayerWaveClear = true;
          console.log("Wave increased!");
          this.oneWaveFinished = true;
          performancePercentage += 10;
        }else if(waves > 10){
          console.log("YOU WIN!");
          this.endGmae();
        }
      }
    }
    endGmae(){
      var backgroundShade = this.add.graphics();
          backgroundShade.fillStyle(0x111111, 0.95);
          backgroundShade.fillRect(0,0,screenWidth,screenHeight);
      var titleText = this.make.text({
        x:screenWidth/2,
        y:screenHeight/4,
        text: 'You Win!',
        style: {
          font: '150px moospace',
          fill: '#ffffff'
        }
      })
    }
    createErrorInLayer(index){
      this.layer = this.errorStepsInOneWave[waves-1][index];
      //console.log("layer: "+this.layer);
      if(this.layer == 1){
          if(this.ApplicationLayerErrorFunction()){
            this.errorResolved = true;
            this.createError = false
          }
          //console.log('Now is application layer error');
      }else if(this.layer == 2){
          if(this.TransportLayerErrorFunction()) {
            this.errorResolved = true;
            this.createError = false
          }
          //console.log('Now is transport layer error');
      }else if(this.layer == 3){
          if(this.InternetLayerErrorFunction()) {
            this.errorResolved = true;
            this.createError = false
          }
          //console.log('Now is internet layer error');
      }else if(this.layer == 4){
          if(this.NetworkAccessLayerErrorFunction()) {
            this.errorResolved = true;
            this.createError = false
          }
          //console.log('Now is network access layer error');
      }else{
        //console.log("no error match!");
      }
    }
    ApplicationLayerErrorFunction(){
      // Application Layer Error
          // Application Layer error is driven by:
          //  1) Application Layer service protocol =/= Transport Layer service protocol
          //  2) Application layer has alert error
          //console.log("ApplicationLayerErrorFunction");
          // dice an error
          this.error = 1;//parseInt((Math.random() * 2)) + 1;
          //if(this.error == 1)
          ApplicationLayer_Alert_Error = true;
          if(ApplicationLayerErrorSolved){
            console.log("Application layer's error solved");
            ApplicationLayer_Alert_Error = false;
            return true;
          }else{
            console.log("Application layer's error to be solved");
            return false;
          }
    }
    TransportLayerErrorFunction(){
      if(TransportLayerErrorSolved){
        console.log("Transport layer's error solved")
        return true;
      }else{
        console.log("Transport layer's error to be solved")
        return false;
      }
    }
    InternetLayerErrorFunction(){
        if(InternetLayerErrorSolved) {
          console.log("Internet layer's error solved")
          InternetLayerERROR = false;
          return true;
        }else{
          console.log("Internet layer's error to be solved")
          InternetLayerERROR = true;
          return false;
        }
    }
    NetworkAccessLayerErrorFunction(){
        if(NetworkAccessLayerErrorSOLVED){
          console.log("Network Access layer's error solved")
          return true;
        }else{
          console.log("Network Access layer's error to be solved")
          return false;
        }
    }
    diceErrorAndOrder(){
      for(var j = 0 ; j <= 9 ; j++){
        this.numberOfError = this.numberOfErrorInOneWave[j];
        //console.log("number of Error:" +this.numberOfError+", j= "+j);
        this.errorStepsInOneWave.push({});
        // create error in layers
          // if there is 4 errors in one wave, make sure every layers has error
          if(this.numberOfError == 4){
              this.errorStepsInOneWave[j][0] = parseInt((Math.random() * 4)) + 1;
              this.errorStepsInOneWave[j][1] = this.errorStepsInOneWave[j][0] + 1;
                  if(this.errorStepsInOneWave[j][1] > 4) this.errorStepsInOneWave[j][1] -= 4;
              this.errorStepsInOneWave[j][2] = this.errorStepsInOneWave[j][1] + 1;
                  if(this.errorStepsInOneWave[j][2] > 4) this.errorStepsInOneWave[j][2] -= 4;
              this.errorStepsInOneWave[j][3] = this.errorStepsInOneWave[j][2] + 1;
                  if(this.errorStepsInOneWave[j][3] > 4) this.errorStepsInOneWave[j][3] -= 4;
          // otherwise, generate different error in different layer for each wave
          }else{
            // randomly generate layer errors in all steps
              for(var i = 0; i < this.numberOfError-2 ; i++){
                this.errorStepsInOneWave[j][i]
                = this.errorLayerPool[parseInt((Math.random()*2))];
              }
              for(var k = this.numberOfError-2; k < this.numberOfError-1 ; k++){
                // create a new object to store the idex(i) value
                    let idxObj = {};
                    idxObj.idx = k;
                this.errorStepsInOneWave[j][idxObj.idx] = 3;
                this.errorStepsInOneWave[j][idxObj.idx+1] = 2;
              }
          }
        }
      console.log("ErrorSystem: error steps created");
      console.table(this.errorStepsInOneWave); // <- the error steps
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
        if(today.getHours()<10) this.H = "0"; else this.H ="";
        if(today.getMinutes()<10) this.M = "0"; else this.M ="";
        if(today.getSeconds()<10) this.S = "0"; else this.S ="";
        //var time = this.H + today.getHours() + ":" + this.M+today.getMinutes() + ":" +this.S+ today.getSeconds();
        this.currentTime.setText(this.H + today.getHours() + ":" + this.M+today.getMinutes() + ":" +this.S+ today.getSeconds());
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
                gameAreaWidth/2-100, topMargin + gameAreaHeight + componentMargin * 2 + 105, 'blueFlag').setScale(0.2)
                .setInteractive()
                .on('pointerover', () =>{
                    waves += 1;
                    console.log("wave + 1");
                })
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
        coinsRewardEvent = this.time.addEvent({ delay: 1000 * waves, callback: coinsReward, callbackScope: this, repeat: Infinity });
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
        this.click = this.sound.add('click-3');
        this.volume = 1;
        // the menu bring to top when clicked within the area
        this.add.zone(screenWidth / 2 - screenWidth / 4, screenHeight / 2 - screenHeight / 4, screenWidth / 2, screenHeight / 2)
            .setInteractive()
            .setOrigin(0)
            .on('pointerdown', () => {
                    this.scene.bringToTop();
        });
        let graphics = this.add.graphics();
        graphics.fillStyle(0xc4c4c4, 1);
        graphics.fillRoundedRect(screenWidth / 2 - screenWidth / 4, screenHeight / 2 - screenHeight / 4, screenWidth / 2, screenHeight / 2);
        // setting button - icon
        this.add.image(gameAreaWidth - 250, topMargin + 35, 'settingIcon', 1)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.settingFunction();
            })
            .setScale(0.075);
        // setting button -text
        this.add.bitmapText(gameAreaWidth - 210, topMargin + 20, 'atari', 'Setting')
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.settingFunction(1);
            })
            .setScale(textScale / 1.5);
        // Setting title
        this.add.bitmapText(3 * screenWidth / 8 - 100, 2 * screenHeight / 8 + 10, 'atari', 'Setting - Game Pasued').setScale(textScale/1.5);
        this.add.bitmapText(3 * screenWidth / 8 - 220, 2 * screenHeight / 8 + 60, 'atari', '*---------------------------*').setScale(textScale / 1.5);

        // setting content
            // change volume
            this.volumeText = this.add.text(screenWidth / 4 + 40, 2 * screenHeight / 8 + 90, 'VOLUME:').setScale(3);
            this.add.text(screenWidth / 4 + 380, 2 * screenHeight / 8 + 90, '+').setScale(3).setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.volume += 0.1;
                normalBackgroundMusic.setVolume(this.volume);
            });
            this.add.text(screenWidth / 4 + 450, 2 * screenHeight / 8 + 90, '-').setScale(3).setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.volume -= 0.1;
            });
            this.add.text(screenWidth / 4 + 500, 2 * screenHeight / 8 + 90, 'MUTE').setScale(3).setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.volume = 0;
            });
            */
        // close button
        this.add.bitmapText(3 * screenWidth / 8 - 50, 2 * screenHeight / 8 + 460, 'atari', '-> Go Back')
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.settingCloseFunction();
            })
            .setScale(textScale);
    }
    update() {
        this.volume = Math.round(this.volume * 100) / 100
        if(this.volume <= 0) this.volume = 0;
        //this.volumeText.setText('VOLUME: ' + this.volume);
        //normalBackgroundMusic.setVolume(this.volume);
        //errorBackgroundMusic.setVolume(this.volume);
    }
    settingFunction(){
        this.scene.bringToTop();
        this.click.play();
        this.scene.pause('Preload');
        this.scene.pause('EventSystem');
        this.scene.pause('TopBar');
        this.scene.pause('BottomBar');
        this.scene.pause('shoppingCart');
        this.scene.pause('Inventory');
        this.scene.pause('Info');
        this.scene.pause('Links');
        this.scene.pause('Background');
        this.scene.pause('SceneApplicationLayer');
        this.scene.pause('SceneTransportLayer');
        this.scene.pause('SceneInternetLayer');
        this.scene.pause('SceneNetworkAccessLayer');
    }
    settingCloseFunction(){
        this.scene.moveAbove('TopBar');
        this.click.play();
        this.scene.resume('Preload');
        this.scene.resume('EventSystem');
        this.scene.resume('TopBar');
        this.scene.resume('BottomBar');
        this.scene.resume('shoppingCart');
        this.scene.resume('Inventory');
        this.scene.resume('Info');
        this.scene.resume('Links');
        this.scene.resume('Background');
        this.scene.resume('SceneApplicationLayer');
        this.scene.resume('SceneTransportLayer');
        this.scene.resume('SceneInternetLayer');
        this.scene.resume('SceneNetworkAccessLayer');
    }
}
// Renamed to "Market" during development
class ShoppingCart extends Phaser.Scene {
    constructor() {
        super({
            key: 'shoppingCart',
            active: true
        })
    }
    preload() {
        this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
        this.load.image('shoppingCartIcon', 'assets/image/shopping-cart.png');
        this.load.audio('click-2', 'assets/audio/clicking-2.mp3');
        this.buttonPressed = false;
        // default opening Application Layer
        this.buttonAL = true;
        this.buttonTL = false;
        this.buttonIL = false;
        this.buttonNAL = false;
        this.itemListText = [];
        this.firstTimeInitial = true;
        inventoryChange = false;
        this.itemListALDone = false;
        this.itemListTLDone = false;
        this.itemListILDone = false;
        this.itemListNALDone = false;
        this.count = 0;
        gameItems.push(
                       [1 ,1,"Anti-WannaCry",       600, "Solve WannaCry for once!", 1],
                       [2 ,1,"Auto Update",         1000, "No more update alert!",    1],
                       [3 ,3,"Auto Routing",        2000, "Automate routing process", 1],
                       [4 ,4,"Twisted Pair Cable",  1000,"Anti-EMF Wave",                         1],
                       [5 ,4,"Mouse Trap",          1000,"No more mice!",                         1],
                       [6 ,1,"BlueDeath Solver",    2000,"Solve Blue Death error!",  1],
                       [7 ,1,"WannaLaugh",          2000,"No more WannaCry!,",       1],
                       //[8 ,4,"Voltage Regulator",   100,"",                         1],
                       [8,2,"Port Algorithm",       1200,"Auto change protocol",                        1],
                       [9,2,"Order Algorithm",     1000,"Auto reoder the packets",                         1],
                       [10,2,"Resend Algorithm",    500,"Auto detect&resend packets",                         1],
                      );
    }
    create() {
        this.scene.moveAbove(BottomBar);
        //this.scene.bringToTop(); // debug use
        this.click = this.sound.add('click-2');
        // the menu bring to top when clicked within the area
        this.add.zone(leftMargin + componentMargin,topMargin + topBarHeight + gameAreaHeight / 3,  gameAreaWidth-200, gameAreaHeight / 1.5)
            .setInteractive()
            .setOrigin(0)
            .on('pointerdown', () => {
                    this.scene.bringToTop();
        });
        let graphics = this.add.graphics();
        graphics.fillStyle(0xc4c4c4, 1);
        // shopping cart menu
        graphics.fillRoundedRect(leftMargin + componentMargin, topMargin + topBarHeight + gameAreaHeight / 3, gameAreaWidth-200, gameAreaHeight / 1.5);
        // title
        this.add.bitmapText(100,gameAreaHeight / 2.3,'atari', "SHOPPING CART").setScale(0.5);
        this.add.bitmapText(60,gameAreaHeight / 2.3+20, 'atari', '*---------------------------*').setScale(textScale / 1.5);
        // Sub menu
            // text
            this.add.text(100, gameAreaHeight / 2.3+50, "Application\nLayer",{fontSize: '27px', fill: '#fff', align: 'center'})
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => {
                        this.buttonAL = true; this.buttonTL = false; this.buttonIL = false; this.buttonNAL = false;
                    });
            this.add.text(330, gameAreaHeight / 2.3+50, "Transport\nLayer",{fontSize: '27px', fill: '#fff', align: 'center'})
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => {
                        this.buttonAL = false; this.buttonTL = true; this.buttonIL = false; this.buttonNAL = false;
                    });
            this.add.text(530, gameAreaHeight / 2.3+50, "Internet\nLayer",{fontSize: '27px', fill: '#fff', align: 'center'})
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => {
                        this.buttonAL = false; this.buttonTL = false; this.buttonIL = true; this.buttonNAL = false;
                    });
            this.add.text(700, gameAreaHeight / 2.3+50, "Network Access\nLayer",{fontSize: '27px', fill: '#fff', align: 'center'})
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => {
                        this.buttonAL = false; this.buttonTL = false; this.buttonIL = false; this.buttonNAL = true;
                    });
            // selection indicater: underline
            this.ALUnderline = this.add.text(100, gameAreaHeight / 2.3+100, "-----------",{fontSize: '27px', fill: '#fff', align: 'center'}).setVisible(false);
            this.TLUnderline = this.add.text(330, gameAreaHeight / 2.3+100, "---------",{fontSize: '27px', fill: '#fff', align: 'center'}).setVisible(false);
            this.ILUnderline = this.add.text(530, gameAreaHeight / 2.3+100, "--------",{fontSize: '27px', fill: '#fff', align: 'center'}).setVisible(false);
            this.NALUnderline = this.add.text(700, gameAreaHeight / 2.3+100, "--------------",{fontSize: '27px', fill: '#fff', align: 'center'}).setVisible(false);
        // Column name
            this.add.text(100,gameAreaHeight/2.3+130,
                          '<Name>                   <Price> <Description>',{fontSize: '27px', fill: '#fff', align: 'left'});
        // Message
            this.message = this.add.text(100, screenHeight-200,'Message: ',{fontSize: '34px', fill: '#fff', align: 'center'});
            this.addMessage("Buy something!");
        // shopping cart menu - close button
        const shoppingCartCloseButton =
            this.add.text(leftMargin + gameAreaWidth - 240, gameAreaHeight/3 + topBarHeight + topMargin + componentMargin + 5, "X", { font: '50px Courier', fill: '#fff' })
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => {
                    this.scene.moveAbove('BottomBar');
                });
        // shopping cart button
            // text button
            var txtShoppingCart = this.add.bitmapText(leftMargin + 100, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 17, 'atari', 'Market')
            .setScale(textScale / 1.5);;
            // image button
            var iconShoppingCart = this.add.image(leftMargin + 50, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 37, 'shoppingCartIcon', 1);
            // zoon of button
            this.add.zone(leftMargin, 3 * componentMargin + topBarHeight + gameAreaHeight, 300, bottomBarHeight)
                .setInteractive({useHandCursor: true})
                .setOrigin(0)
                .on('pointerdown', () => {
                  this.openEvent();
            });
    }
    update(){
        // handle underline
        if(this.buttonAL)   this.ALUnderline.setVisible(true); else this.ALUnderline.setVisible(false);
        if(this.buttonTL)   this.TLUnderline.setVisible(true); else this.TLUnderline.setVisible(false);
        if(this.buttonIL)   this.ILUnderline.setVisible(true); else this.ILUnderline.setVisible(false);
        if(this.buttonNAL)  this.NALUnderline.setVisible(true); else this.NALUnderline.setVisible(false);
        //this.createList();
        // display item list
        if(this.buttonAL && !this.itemListALDone){
            //console.log("Display AL");
            this.clearList();
            this.addList(1);
            this.itemListALDone = true; this.itemListTLDone = false; this.itemListILDone = false; this.itemListNALDone = false;
        }
        if(this.buttonTL && !this.itemListTLDone ){
            //console.log("Display TL");
            this.clearList();
            this.addList(2);
            this.itemListALDone = false; this.itemListTLDone = true; this.itemListILDone = false; this.itemListNALDone = false;
        }
        if(this.buttonIL && !this.itemListILDone){
            //console.log("Display IL");
            this.clearList();
            this.addList(3);
            this.itemListALDone = false; this.itemListTLDone = false; this.itemListILDone = true; this.itemListNALDone = false;
        }
        if(this.buttonNAL && !this.itemListNALDone){
            //console.log("Display NAL");
            this.clearList();
            this.addList(4);
            this.itemListALDone = false; this.itemListTLDone = false; this.itemListILDone = false; this.itemListNALDone = true;
        }
        //this.itemList.setText(this.itemListText);
    }
    addList(index){
        this.counter = 0; // the number of item in one layer
        for(var i = 0 ; i < gameItems.length ; i++){
            if(gameItems[i][1] == index){
                // create a new object to store the idex(i) value
                    let idxObj = {};
                    idxObj.idx = i;
                // Name
                this.tempName =
                    this.add.text(100, gameAreaHeight / 2.3+160+this.counter*40, gameItems[i][2],{fontSize: '35px', fill: '#fff', align: 'left'})
                // Price
                this.tempPrice =
                    this.add.text(510, gameAreaHeight / 2.3+160+this.counter*40, gameItems[i][3],{fontSize: '35px', fill: '#fff', align: 'left'})
                // Description
                this.tempDescription =
                    this.add.text(630, gameAreaHeight / 2.3+160+this.counter*40, gameItems[i][4],{fontSize: '30px', fill: '#fff', align: 'left'})
                // Buy button
                this.tempBuy =
                    this.add.text(1100, gameAreaHeight / 2.3+160+this.counter*40, '[ BUY ]',{fontSize: '35px', fill: '#fff', align: 'left'})
                        .setInteractive({useHandCursor: true})
                        .on('pointerdown', () => {
                            if(buying(idxObj.idx)) {
                              console.log('You bought item: Index ' + idxObj.idx);
                              this.addMessage("You bought " +gameItems[idxObj.idx][2] + "!");
                            }else{
                              this.addMessage("You don't have enough coins to buy "+gameItems[idxObj.idx][2]);
                              console.log("insufficient coins!");
                            }
                        });
                this.itemListText.push([this.tempName, this.tempPrice, this.tempDescription, this.tempBuy]); // push the data
                this.counter += 1; // increase by one if there is a match (that gameItem is belong to this layer)
            }
        }
    }
    clearList(){
        //console.log("Length"+this.itemListText.length);
        //console.table(this.itemListText);
        if(this.firstTimeInitial){
            this.firstTimeInitial = false;
        }else{
            // visual clear the list
            for(var i = 0; i < this.itemListText.length ; i++){
                // create a new object to store the idex(i) value
                let idxObj = {};
                idxObj.idx = i;
                this.itemListText[idxObj.idx][0].destroy();
                this.itemListText[idxObj.idx][1].destroy();
                this.itemListText[idxObj.idx][2].destroy();
                this.itemListText[idxObj.idx][3].destroy();
            }
            // clear the list in data aspect
            this.itemListText = [];
        }
    }
    refresh (){
        this.cameras.main.setPosition(this.parent.x, this.parent.y);
        this.scene.bringToTop();
    }
    openEvent(){
        this.scene.bringToTop();
        this.click.play();
        if(this.buttonPressed){
            this.scene.moveAbove('BottomBar');
            this.buttonPressed = false;
        }else{
            this.buttonPressed = true;
        }
    }
    addMessage(message){
      this.message.setText("Message: "+message);
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
        this.buttonPressed = false;
        this.itemListText = [];
        this.firstTimeInitial = true;
        // default opening Application Layer
        this.buttonAL = true;
        this.buttonTL = false;
        this.buttonIL = false;
        this.buttonNAL = false;
        this.itemListALDone = false;
        this.itemListTLDone = false;
        this.itemListILDone = false;
        this.itemListNALDone = false;
    }
    create() {
        this.scene.moveAbove(Background);
        //this.scene.sendToBack(); // debug use
        //this.scene.bringToTop(); // debug use
        this.click = this.sound.add('click-2');
        // the menu bring to top when clicked within the area
        this.add.zone(leftMargin+150 + componentMargin, topMargin + topBarHeight + gameAreaHeight / 3, gameAreaWidth-200, gameAreaHeight / 1.5)
            .setInteractive()
            .setOrigin(0)
            .on('pointerdown', () => {
                this.scene.bringToTop();
        });
        let graphics = this.add.graphics();
        graphics.fillStyle(0x0048ff, 1);
        // Inventory cart menu
        graphics.fillRoundedRect(leftMargin+150 + componentMargin, topMargin + topBarHeight + gameAreaHeight / 3, gameAreaWidth-200, gameAreaHeight / 1.5);
        // title
        this.add.bitmapText(250,gameAreaHeight / 2.3,'atari', "INVENTORY").setScale(0.5);
        this.add.bitmapText(210,gameAreaHeight / 2.3+20, 'atari', '*---------------------------*').setScale(textScale / 1.5);
        // Column name
            this.add.text(250,gameAreaHeight/2.3+50,
                          '<Layer> <Name>                <Qty.> <Description>',{fontSize: '27px', fill: '#fff', align: 'left'});
        // Message
        this.message = this.add.text(250, screenHeight-200,'Message: ',{fontSize: '34px', fill: '#fff', align: 'center'});
        this.addMessage("Use something you need!");
        // Inventory menu - close button
        const inventoryCloseButton =
            this.add.text(leftMargin + gameAreaWidth / 1.5 + 430, gameAreaHeight/3 + topBarHeight + topMargin + componentMargin + 5, "X", { font: '50px Courier', fill: '#fff' })
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => {
                    this.scene.moveAbove('BottomBar');
                });
        // Inventory button
        var txtInventory = this.add.bitmapText(leftMargin + 360, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 17, 'atari', 'Inventory')
            .setScale(textScale / 1.5);
        var iconInventory = this.add.image(leftMargin + 330, topMargin + topBarHeight + gameAreaHeight + 2 * componentMargin + 37, 'inventoryIcon', 1)
            .setScale(0.15);
        this.add.zone(leftMargin + 300, 3 * componentMargin + topBarHeight + gameAreaHeight, 350, bottomBarHeight)
          .setInteractive({useHandCursor: true})
          .setOrigin(0)
          .on('pointerdown', () => {
            this.openEvent();
          });
    }
    update() {
        if(inventoryChange){
            inventoryChange = false;
            // clear the list if this is not the first initial
            this.clearList();
            this.updateList();
            for(var i = 0 ; i < inventory.length ; i++){
                //console.log(i);
                // create a new object to store the idex(i) value
                    let idxObj = {};
                    idxObj.idx = i;
                // Layer
                this.tempLayer =
                    this.add.text(250,  gameAreaHeight / 2.3+60+i*40, this.determineLayer(inventory[i][1]) ,{fontSize: '35px', fill: '#fff', align: 'left'});
                // Name
                this.tempName =
                    this.add.text(370,  gameAreaHeight / 2.3+60+i*40, inventory[i][2],{fontSize: '35px', fill: '#fff', align: 'left'});
                // Qty.
                this.tempQty =
                    this.add.text(750, gameAreaHeight / 2.3+60+i*40, inventory[i][5],{fontSize: '35px', fill: '#fff', align: 'left'})
                // Description
                this.tempDescription =
                    this.add.text(850,  gameAreaHeight / 2.3+60+i*40, inventory[i][4],{fontSize: '30px', fill: '#fff', align: 'left'});
                // Buy button
                if(i == 0){ // a stupid, yet easy way to avoid making a extra button, and the error in clearList function
                    this.tempApply = this.add.text(0,0,'',1);
                }else{
                    this.tempApply =
                    this.add.text(1350, gameAreaHeight / 2.3+60+i*40, '[ APPLY ]',{fontSize: '35px', fill: '#fff', align: 'left'})
                        .setInteractive({useHandCursor: true})
                        .on('pointerdown', () => {
                            if(applyItem(inventory[idxObj.idx][0])){
                                inventory[idxObj.idx][5] -= 1;
                                console.log('You used' + idxObj.idx);
                                this.addMessage("You applied "+inventory[idxObj.idx][2]+"! Let see what will happen!");
                                this.updateList();
                                console.table(inventory);
                                //console.table(gameItems);
                            }else{
                                console.log("Doesn't need this now !");
                                this.addMessage("You can't use this now, maybe it isn't needed");
                            }
                            inventoryChange = true;
                        });
                }
                this.itemListText.push([this.tempLayer, this.tempName, this.tempQty, this.tempDescription, this.tempApply]); // push the data
                //console.table(this.itemListText);
            }
        }
    }
    determineLayer(index){
      // misunderstand in the layer number during development, just make it appear correct to the player
        if(index==1)        return '4th';
        else if(index==2)   return '3rd';
        else if(index==3)   return '2nd';
        else if(index==4)   return '1st';
    }
    openEvent(){
        this.scene.bringToTop();
        this.click.play();
        if(this.buttonPressed){
            this.scene.moveAbove('BottomBar');
            this.buttonPressed = false;
        }else{
            this.buttonPressed = true;
        }
    }
    clearList(){
        if(this.firstTimeInitial){
            this.firstTimeInitial = false;
        }else{
            // visual clear the list
            for(var i = 0; i < this.itemListText.length ; i++){
                // create a new object to store the idex(i) value
                let idxObj = {};
                idxObj.idx = i;
                this.itemListText[idxObj.idx][0].destroy();
                this.itemListText[idxObj.idx][1].destroy();
                this.itemListText[idxObj.idx][2].destroy();
                this.itemListText[idxObj.idx][3].destroy();
                this.itemListText[idxObj.idx][4].destroy();
            }
            // clear the list in data aspect
            this.itemListText = [];
        }
    }
    updateList(){
        for(var i = 0 ; i < inventory.length ; i++){
            if(inventory[i][5] == 0){
                //console.log("rich zero");
                inventory.splice(i,1);
            }
        }
    }
    addMessage(message){
      this.message.setText("Message: "+message);
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
                //click.play();
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
            //secondLink.fillStyle(errorColor, 1);
        }
        else if(InternetLayerERROR){
            firstLink.fillStyle(errorColor, 1);
            secondLink.fillStyle(errorColor, 1);
            //thirdLink.fillStyle(errorColor, 1);
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
        this.load.spritesheet('background-normal', 'assets/image/background/backgroundSprite-normal.png',{frameWidth: 889, frameHeight: 500});
        this.load.spritesheet('background-error', 'assets/image/background/backgroundSprite-error.png',{frameWidth: 889, frameHeight: 500});
    }
    create(){
        this.scene.sendToBack();
        this.anims.create({
            key: 'backgroundNORMAL',
            frames: this.anims.generateFrameNumbers('background-normal', { start: 0, end: 8}),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'backgroundERROR',
            frames: this.anims.generateFrameNumbers('background-error', { start: 0, end: 8}),
            frameRate: 10,
            repeat: -1
        });
        this.backgroundNORMAL = this.add.sprite(screenWidth/2,screenHeight/2, 'background-normal').setScale(2.2);
        this.backgroundNORMAL.anims.play('backgroundNORMAL',true);
        this.backgroundERROR = this.add.sprite(screenWidth/2,screenHeight/2, 'background-error').setScale(2.2).setVisible(false);
        this.backgroundERROR.anims.play('backgroundERROR',true);
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
        this.load.spritesheet('icon', 'assets/image/Application-Layer/computerSprite.png', {frameWidth: 400, frameHeight: 400});
        this.load.spritesheet('Alert-Reboot','assets/image/Application-Layer/rebootSprite.png', {frameWidth: 1200, frameHeight: 675});
        this.load.spritesheet('Alert-Reboot2','assets/image/Application-Layer/rebootSprite2.png', {frameWidth: 600, frameHeight: 338});
        this.load.image('Service-YouTube', 'assets/image/Application-Layer/YouTube.png')
        this.load.image('Service-FTP','assets/image/Application-Layer/FTP.png');
        this.load.image('Service-Telnet','assets/image/Application-Layer/Telnet.png');
        this.load.image('Service-FTP-Icon','assets/image/Application-Layer/FTP_icon.png');
        this.load.image('Service-NoService', 'assets/image/Application-Layer/Home.png');
        this.load.image('Service-YouTube-Icon','assets/image/Application-Layer/YouTube_icon.png')
        this.load.image('Service-Telnet-Icon','assets/image/Application-Layer/telnet_icon.png')
        this.load.image('Alert-WindowsUpdate','assets/image/Application-Layer/Alert-WindowsUpdate.png')
        this.load.image('Alert-WindowsBlueDeath','assets/image/Application-Layer/Alert-BlueDeath.png')
        this.load.image('Alert-WindowsWannaCry','assets/image/Application-Layer/Alert-Wannacry.png')
        this.load.audio('click', 'assets/audio/clicking-1.mp3');
        this.counter = 0;
        this.pickAnError = true;
        this.alertErrorSolved = false;
        this.percentage = 0;
        applicationLayerActiveSkillItems = 0; // default doesn't need skill item
        this.errorLottery =
        [ 1, // Windows Update
          2, // Blue Death
          3 // WannaCry
        ];
    }
    create(){
        this.scene.moveBelow(Preload, SceneApplicationLayer);
        let graphics = this.add.graphics();
        var click = this.sound.add('click');
        // add an area to collect all input, prevent from clicking the elements in other layer
        this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
        this.layerIcon = this.add.image(leftMargin + gameAreaWidth+90, topMargin + topBarHeight + componentMargin + 0 * gameIConHeight+20, 'icon',0)
        .setInteractive({useHandCursor: true}).setScale(0.5)
        .on('pointerdown', () => {
            this.scene.bringToTop();
            click.play();
            //this.layerIcon.frame = this.layerIcon.scene.textures.getFrame('icon',1);
            //ApplicationLayer_Alert_Error = true; // debug use
            //ApplicationLayerErrorSolved = true; // debug use
        })
        .on('pointerup',() =>{
            this.layerIcon.frame = this.layerIcon.scene.textures.getFrame('icon',0);
        })
        .on('pointerout',() =>{
            this.layerIcon.frame = this.layerIcon.scene.textures.getFrame('icon',0);
        });
        this.add.text(leftMargin + gameAreaWidth+20, topMargin + topBarHeight + componentMargin + 0 * gameIConHeight+120,'Application\nLayer',{ font: '24px Courier', fill: '#fff', align: 'center',
        });
        // layer name text
        //this.add.text(leftMargin*3, topBarHeight + 0 * gameIConHeight + 30, "Application Layer", { font: '50px Courier', fill: '#000' })
        // Application Screen
        {
        this.NoService = this.add.image(810, gameAreaHeight/2+112, 'Service-NoService',1).setScale(0.625).setVisible(false);
        this.YouTube = this.add.image(810, gameAreaHeight/2+110, 'Service-YouTube', 1).setScale(0.625).setVisible(false);
        this.FTP = this.add.image(810, gameAreaHeight/2+112, 'Service-FTP',1).setScale(0.625).setVisible(false);
        this.Telnet = this.add.image(810, gameAreaHeight/2+90, 'Service-Telnet',1).setScale(0.625).setVisible(false);
        }
        // Application icon
        {
        this.YouTube_Icon = this.add.image(leftMargin + gameAreaWidth+90,topMargin + topBarHeight - 10,'Service-YouTube-Icon',1).setScale(0.075).setVisible(false);
        this.FTP_Icon = this.add.image(leftMargin + gameAreaWidth+90,topMargin + topBarHeight - 10,'Service-FTP-Icon',1).setScale(0.15).setVisible(false);
        this.Telnet_Icon = this.add.image(leftMargin + gameAreaWidth+90,topMargin + topBarHeight - 10,'Service-Telnet-Icon',1).setScale(0.25).setVisible(false);
        }
        // default service
        changeService();
        //ApplicationLayerService = service[1];
        // Alert error
            // ### Windows Update Error ###
                // the error window
                this.Alert_Windows_Update = this.add.image(leftMargin + gameAreaWidth/2, 2 * componentMargin + topBarHeight + gameAreaHeight/2, 'Alert-WindowsUpdate').setScale(1.5).setVisible(false).setActive(false);
                // Restart button
                this.Alert_Windows_Update_Restart = this.add.zone(leftMargin + gameAreaWidth/2 - 50, 2 * componentMargin + topBarHeight + gameAreaHeight/2 + 70, 180, 51).setInteractive({useHandCursor: true}).setOrigin(0)
                        .on('pointerdown', () => {
                        this.Alert_Windows_Update_RestartBool = true;
                        console.log("Restart Now");
                    }).setVisible(false).setActive(false);
                // Cancel button
                this.Alert_Windows_Update_Close = this.add.zone(leftMargin + gameAreaWidth/2 + 155, 2 * componentMargin + topBarHeight + gameAreaHeight/2 + 70, 177, 51).setInteractive({useHandCursor: true}).setOrigin(0)
                        .on('pointerdown', () => {
                        console.log("Cancel");
                        ApplicationLayer_Alert_Error = false;
                        if(!this.alertErrorSolved) this.alertErrorSolved = true;
                    }).setVisible(false).setActive(false);
                // reboot screen
                this.anims.create({
                    key: 'reboot',
                    frames: this.anims.generateFrameNumbers('Alert-Reboot2', { start: 0, end: 40}),
                    frameRate: 15,
                    repeat: -1
                });
                this.rebootScreen = this.add.sprite(810, gameAreaHeight/2+90 , 'Alert-Reboot2').setScale(2.666666).setVisible(false);
                this.rebootScreen.anims.play('reboot',true);
            // ### Windows Blue Death Error ###
                // the blue death screen
                this.Alert_Windows_BlueDeath = this.add.image(leftMargin+gameAreaWidth/2, 2*componentMargin+topBarHeight+gameAreaHeight/2, 'Alert-WindowsBlueDeath', 1).setScale(1.25).setVisible(false).setActive(false);;
                // "complete" percentage
                this.Alert_Windows_BlueDeath_RecoverPercentage = this.add.text(180, 605, "00%", { font: '30px Courier', fill: '#fff' }).setVisible(false).setActive(false);;
            // ### Windows Wannacry Error ###
                // the error screen
                this.Alert_Windows_WannaCry = this.add.image(leftMargin+gameAreaWidth/2, 2*componentMargin+topBarHeight+gameAreaHeight/2, 'Alert-WindowsWannaCry', 1).setScale(1).setVisible(false).setActive(false);
    }
    update(){
        // Windows update alert
            // popup display
            //console.log("this.pickAnError: "+this.pickAnError);
            if(ApplicationLayer_Alert_Error){
              //console.log("alert error!")
                // if the error hasn't been picked
                if(this.pickAnError){
                    //console.log("pick error!");
                    this.pickAnError = false; // stop picking error
                    if(!this.alertErrorSolved) this.alertErrorSolved = false; // indicate there is an alert error to be solved
                    if(applicationLayerSkillItems_StopUpdate_Applied)
                      if(this.errorLottery.includes(1)) this.errorLottery.splice(this.errorLottery.indexOf(1),1);
                    if(applicationLayerSkillItems_BlueDeathSolution_Applied)
                      if(this.errorLottery.includes(2)) this.errorLottery.splice(this.errorLottery.indexOf(2),1);
                    if(applicationLayerSkillItems_WannaLaugh_Applied)
                      if(this.errorLottery.includes(3)) this.errorLottery.splice(this.errorLottery.indexOf(3),1);
                    //console.table(this.errorLottery); // debug use
                    // dice a error
                    if(this.errorLottery.length != 0){
                      this.index = parseInt((Math.random() * this.errorLottery.length));
                      this.ApplicationLayer_Alert_Error_Type = this.errorLottery[this.index];
                    }else{
                      ApplicationLayerErrorSolved = true;
                      ApplicationLayer_Alert_Error = false;
                    }
                    //this.ApplicationLayer_Alert_Error_Type = 3; // debug use
                    //console.log("ApplicationLayer_Alert_Error_Type: "+this.ApplicationLayer_Alert_Error_Type);
                  // type 1: Windows Update error
                  if(this.ApplicationLayer_Alert_Error_Type == 1){
                      console.log("Windows Update Error");
                      this.Alert_Windows_Update.setVisible(true).setActive(true);
                      this.Alert_Windows_Update_Restart.setVisible(true).setActive(true);
                      this.Alert_Windows_Update_Close.setVisible(true).setActive(true);
                      applicationLayerActiveSkillItems = 2; // expecting "Auto Update" skill item
                  }
                  // type 2: Windows Blue Death Alert
                  else if(this.ApplicationLayer_Alert_Error_Type == 2){
                      console.log("Blue Death Error");
                      this.Alert_Windows_BlueDeath.setVisible(true).setActive(true);
                      this.Alert_Windows_BlueDeath_RecoverPercentage.setVisible(true).setActive(true);
                      applicationLayerActiveSkillItems = 3; // expecting "Blue Death Solver" skill item
                  }
                  // type 3: Windows WannaCry
                  else if(this.ApplicationLayer_Alert_Error_Type == 3){
                      console.log("WannaCry Error");
                      this.Alert_Windows_WannaCry.setVisible(true).setActive(true);
                      applicationLayerActiveSkillItems = 1; // expecting "Anti-WannaCry" skill item
                  }
                }
            }else if(!ApplicationLayer_Alert_Error){
                // if all the alert error is solved, disable and inacitve all
                if(this.alertErrorSolved){
                  //ApplicationLayer_Alert_Error = false
                    this.Alert_Windows_Update.setVisible(false).setActive(false);
                    this.Alert_Windows_Update_Restart.setVisible(false).setActive(false);
                    this.Alert_Windows_Update_Close.setVisible(false).setActive(false);
                    this.Alert_Windows_BlueDeath.setVisible(false).setActive(false);
                    this.Alert_Windows_BlueDeath_RecoverPercentage.setVisible(false).setActive(false);
                    this.Alert_Windows_WannaCry.setVisible(false).setActive(false);
                    applicationLayerActiveSkillItems = 0; // this layer doesn't need any skill item now
                    applicationLayerSkillItems_WannaCry_Applied = false;
                    applicationLayerSkillItems_BlueDeathSpeedUp_Applied = false;
                    //applicationLayerSkillItems_StopUpdate_Applied = false;
                    //applicationLayerSkillItems_BlueDeathSolution_Applied = false;
                    this.pickAnError = true; // next error can be picked
                    this.alertErrorSolved = false; // the problem is not solved
                    console.log("Application layer's error has been solved");
                    ApplicationLayerErrorSolved = true;
                }
            }
            // if user clicked restart
            if(this.Alert_Windows_Update_RestartBool){
                    this.Alert_Windows_Update_RestartBool = false;
                    this.rebootScreen.setVisible(true).setActive(true);
                    // hold the screen in reboot for 5 seconds x waves
                    this.time.addEvent({
                        delay: 5000 * waves,
                        callback: ()=>{
                            console.log("Application_Alert_Error: "+ApplicationLayer_Alert_Error);
                            this.rebootScreen.setVisible(false).setActive(false);
                            ApplicationLayer_Alert_Error = false;
                            if(!this.alertErrorSolved) this.alertErrorSolved = true;
                        },
                        loop: false
                    })
                }
        // handle blue death error
        if(this.ApplicationLayer_Alert_Error_Type == 2){
            if(!this.alertErrorSolved){
                // add the percentage, speed depends on waves
                this.counter += 1;
                if(applicationLayerSkillItems_BlueDeathSpeedUp_Applied) this.interval = ( 10 * waves ) / 100;
                else this.interval = ( 10 * waves );
                if(this.counter % (this.interval) == 0) this.percentage += 1;
                // update text %
                this.Alert_Windows_BlueDeath_RecoverPercentage.setText(this.percentage+"%");
                if(this.percentage >= 100){
                    this.alertErrorSolved = true
                    ApplicationLayer_Alert_Error = false;
                    ApplicationLayerErrorSolved = true;
                    this.counter = 0;
                    this.percentage = 0;
                    //this.Alert_Windows_BlueDeath_RecoverPercentage.setText("");
                }
            }
        }
        // handle WannaCry error
        if(this.ApplicationLayer_Alert_Error_Type == 3){
          //console.log("Error is WannaCry");
          if(!this.alertErrorSolved){
            if(applicationLayerSkillItems_WannaCry_Applied){
              this.alertErrorSolved = true;
              ApplicationLayer_Alert_Error = false;
              ApplicationLayerErrorSolved = true;
              applicationLayerSkillItems_WannaCry_Applied = false;
            }
          }
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
        */
        if(ApplicationLayerService == service[1]){ // ftp
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
        //Added by Ambrose
        {
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
        }
		//End here
        this.load.image('truckIcon','assets/image/transport-layer/truck.png')
        this.load.audio('click', 'assets/audio/clicking-1.mp3')
        TransportLayerService = 'HTTP';
        this.currentWavePlayed = false;
    }
    create() {
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
                //TransportLayerErrorSolved = true;
            })
            .setScale(0.14);
       this.add.text(leftMargin + gameAreaWidth+25, topMargin + topBarHeight + componentMargin + 1 * gameIConHeight+165,'Transport\nLayer',{ font: '24px Courier', fill: '#fff', align: 'center',
            });
        //Added by Ambrose
				this.add.image(810, 540, 'background').setScale(5/3);//create background image
				this.add.image(810, 540, 'orderZone').setScale(5/3);//create order zone
				currentPortText = this.add.text(70, 120, 'Current Service: ' + currentPort, {fontSize: '27px', fill: '#000'});
				//WaveText = this.add.text(70, 150, 'Current Wave: ' + wave, {fontSize: '27px', fill: '#000'});
				portingText = this.add.text(70, 850, 'Select the \ncorrect port to allow \nthe segement come in by \nclicking the port.', {fontSize: '27px', fill: '#000'});
				reorderText = this.add.text(630, 900, 'Re-order the segments.', {fontSize: '27px', fill: '#000'});
				resendText = this.add.text(1150, 830, 'Request for resending \nby clciking the corrupted \nsegments \n(i.e. the half-sized \nsegements).', {fontSize: '27px', fill: '#000'});
				//create port
				makePort.call(this);
				port.on('pointerup', switchPort, this); // switch the port in Transport Layer
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
        //console.log(this.TransportLayerService);
        //console.log(ApplicationLayerService);
        //console.log(this.TransportLayerService.localeCompare(ApplicationLayerService))
        if(TransportLayerService.localeCompare(ApplicationLayerService) == 0) TransportLayerERROR = false
        else TransportLayerERROR = true
        // debug use
        /*
        this.temp.setText('Current Service in this layer:' + TransportLayerService +
            '\nCurrent Service in app layer:' + ApplicationLayerService +
                         '\n Error: '+TransportLayerERROR );
        */
        //Added by Ambrose
        currentPort = ApplicationLayerService;
        //wave = waves;
				currentPortText.setText('Current Service: ' + currentPort);
				//WaveText.setText('Current Wave: ' + wave);
        //if(waves == wave) this.temp = true; else this.temp = false;
        //console.log("current wave played = "+this.currentWavePlayed+" , waves == wave: "+this.temp+", wave: "+wave);
        /*
          wave is the wave value in Transport Layer only
          waves is the wave value for the whole game
        */
        // if the wave in transport layer = wave in whole game, the game will play, to ensure the this game will be played once a wave
        //if( waves == wave && this.currentWavePlayed == false){
          //console.log("test");
          if((portName == currentPort || IsPortAlgo == true) && TransportLayerWaveClear == true)
  				{
            //console.log("correct port");
  					InPort.call(this);
  					if(blockCount <= 9)
  					{
  						blockArray[blockCount] = blocks.create(600, 540, blockNameList[blockCount]).setScale(5/3);
  						blockArray[blockCount].setInteractive();
  						blockArray[blockCount].name = 'segment ' + blockCount;
  						this.input.setDraggable(blockArray[blockCount]);
  						blockArray[blockCount].setBounce(1);
  						blockArray[blockCount].setVelocity(Math.random() * 100 + speed * waves, Math.random() * 100 + speed * waves);
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
  							obj.setVelocity(Math.random() * 100 + speed * waves, Math.random() * 100 + speed * waves);
  						});
  					}
  					blockCount++;
  				}
  				else if(portName != currentPort)
  				{
  					//console.log("Port not match");
  				}
  				if(segment0_status == true && segment1_status == true && segment2_status == true && segment3_status == true && segment4_status == true && segment5_status == true && segment6_status == true && segment7_status == true && segment8_status == true && segment9_status == true)
  				{
  					console.log("ALL MATCH!!");
  					orderCorrect = true;
  				}
  				if(orderCorrect == true){
					console.log("orderCorrect = true");
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
					console.log("Corruptions should be created");
  					TransportLayerWaveClear = false;
  					blockCount = 0;
  					orderCorrect = false;
  				}
  				if((IsOrderAlgo == true && (portName == currentPort && TransportLayerWaveClear == true)) || (IsPortAlgo == true && IsOrderAlgo == true) && TransportLayerWaveClear == true)
  				{
  					for (var i = 0; i < 10; i++)
  					{
  						okBlockArray[i].setScale(5/3);
  						okBlockArray[i].setPosition(1350, 360 + 40 * i);
  					}
  					createCorrupt.call(this);
  					TransportLayerWaveClear = false;
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
                TransportLayerErrorSolved = true;
  							//TransportLayerWaveClear = true;
                this.currentWavePlayed = true; //
  							//wave++;
  						}
  					}
  				blockMissAvoid.call(this);
  				skillItems.call(this);
  				//End here
        }
        //}
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
        //Added by Ambrose
  				this.load.image('background', 'assets/image/Internet-Layer/background_test.png');
  				this.load.image('start', 'assets/image/Internet-Layer/start.png');
  				this.load.image('router', 'assets/image/Internet-Layer/router.png');
  				this.load.image('selectedRouter', 'assets/image/Internet-Layer/selectedRouter.png');
  				this.load.image('end', 'assets/image/Internet-Layer/end.png');
  				this.load.image('pathN','assets/image/Internet-Layer/pathN.png');
  				this.load.image('pathE','assets/image/Internet-Layer/pathE.png');
  				this.load.image('pathS','assets/image/Internet-Layer/pathS.png');
  				this.load.image('pathW','assets/image/Internet-Layer/pathW.png');
  				this.load.image('pathNE','assets/image/Internet-Layer/pathNE.png');
  				this.load.image('pathSE','assets/image/Internet-Layer/pathSE.png');
  				this.load.image('pathSW','assets/image/Internet-Layer/pathSW.png');
  				this.load.image('pathNW','assets/image/Internet-Layer/pathNW.png');
  				this.load.image('restartbtn', 'assets/image/Internet-Layer/restart.png');
  				this.load.image('autoRouting', 'assets/image/Internet-Layer/autoRouting.png');
    }
    create() {
        let graphics = this.add.graphics();
        var click = this.sound.add('click');
        // add an area to collect all input, prevent from clicking the elements in other layer
        this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
        graphics.fillStyle(0xffcc33, 1);
        // fillRect(x, y, width, height)
        graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
        errorText_IL = this.add.text(40, 630, 'Error: -', {fontSize: '27px', fill: '#000'});
        const activeButton =
            this.add.image(leftMargin + gameAreaWidth+90, topMargin + topBarHeight + componentMargin + 2.5 * gameIConHeight, 'networkIcon', 1)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.scene.bringToTop();
                click.play();
                //InternetLayerErrorSolved = true; // debug use
            })
            .setScale(0.35);
            this.add.text(leftMargin + gameAreaWidth+23, topMargin + topBarHeight + componentMargin + 2.5 * gameIConHeight+90,'Internet\nLayer',{ font: '24px Courier', fill: '#fff', align: 'center',
            });
      this.add.image(810, 540, 'background').setScale(5/3);
        //Start routers
			for (var i = 0; i < 9; i++)
			{
					startArray[i] = this.add.image(310, 140 + i * 100, 'start').setScale(0);
					startPathNEArray[i] = this.add.image(410, 90 + i * 100, 'pathNE').setScale(0);
					startPathEArray[i] = this.add.image(410, 140 + i * 100, 'pathE').setScale(0);
					startPathSEArray[i] = this.add.image(410, 190 + i * 100, 'pathSE').setScale(0);
			}
			//End routers
			for (var i = 0; i < 9; i++)
			{
					endArray[i] = this.add.image(1510, 140 + i * 100, 'end').setScale(0);
			}
			//Middle routers
			for (var i = 0; i < 5; i++)
			{
				for (var j = 0; j < 9; j++)
				{
					routerArray[j][i] = this.add.image(510 + 200 * i, 140 + j * 100, 'router').setScale(1);
					weight = Math.trunc(Math.random() * 5 + 1);
					weightTextArray[j][i] = this.add.text(500 + 200 * i, 130 + j * 100, weight, {fontSize: '27px', fill: '#000'});
					routerArray[j][i].name = weight;
					selectedRouterArray[j][i] = this.add.image(510 + 200 * i, 140 + j * 100, 'selectedRouter').setScale(0);
					routerPathNArray[j][i] = this.add.image(510 + 200 * i, 90 + j * 100, 'pathN').setScale(0);
					routerPathEArray[j][i] = this.add.image(610 + 200 * i, 140 + j * 100, 'pathE').setScale(0);
					routerPathSArray[j][i] = this.add.image(510 + 200 * i, 190 + j * 100, 'pathS').setScale(0);
					routerPathWArray[j][i] = this.add.image(410 + 200 * i, 140 + j * 100, 'pathW').setScale(0);
					routerPathNEArray[j][i] = this.add.image(610 + 200 * i, 90 + j * 100, 'pathNE').setScale(0);
					routerPathSEArray[j][i] = this.add.image(610 + 200 * i, 190 + j * 100, 'pathSE').setScale(0);
					routerPathSWArray[j][i] = this.add.image(410 + 200 * i, 190 + j * 100, 'pathSW').setScale(0);
					routerPathNWArray[j][i] = this.add.image(410 + 200 * i, 90 + j * 100, 'pathNW').setScale(0);
				}
			}
      this.add.text(40,200,'Press space to select path',{fontSize: '27px', fill: '#000'})
      costText = this.add.text(40, 525, 'Max. cost: ' + costNum, {fontSize: '27px', fill: '#000'});
      currentCostText = this.add.text(40, 560, 'Remain: ' + remainNum, {fontSize: '27px', fill: '#000'});
      performanceText_IL = this.add.text(40, 595, 'Sending: 0', {fontSize: '27px', fill: '#000'});
      errorText_IL = this.add.text(40, 630, 'Error: -', {fontSize: '27px', fill: '#000'});
      restartBtn = this.add.image(120, 740, 'restartbtn').setInteractive();
			spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); //add space as key
    }
    update() {
              timer_IL++;
      				//console.log(timer_IL);
      				//remainNum = costNum;
      				if (!IsAutoRouting)
      				{
      					currentCostText.setText('Remain: ' + remainNum); //update remain cost
      				}
              if (waveClear_IL == true && currentWave != waves) //&& !IsAutoRouting
              {
						currentWave = waves;
                performance_IL = 0;
      					//console.log("start");
      					//change the shift pace according to the current wave
      					shiftPace = shiftPace - waves * 10;
      					//change the cost according to the current wave
      					costNum = 50 - 3 * waves;
      					costText.setText("Max. cost: " + costNum);
                errorText_IL.setText('Error: -');
      					if(startNum > 0 && endNum > 0)
      					{
      						startArray[startNum].setScale(0);
      						endArray[endNum].setScale(0);
      					}
      					//Decide the starting router
      					startNum = Math.trunc(Math.random() * 7) + 1;
      					//console.log(startNum);
      					startArray[startNum].setScale(1);
      					//Decide the ending router
      					endNum = Math.trunc(Math.random() * 9);
      					//console.log(endNum);
      					endArray[endNum].setScale(1);
      					//init the current node
      					currentNode[0] = startArray[startNum].x;
      					currentNode[1] = startArray[startNum].y;
      					//console.log(currentNode[0] + ' ' + currentNode[1]);
                //errorText_IL = this.add.text(40, 630, 'Error: -', {fontSize: '27px', fill: '#000'});
      					for (var i = 0; i < 5; i++)
      					{
      						for (var j = 0; j < 9; j++)
      						{
      							if (IsBandwidthUp)
      							{
      								weight = Math.trunc(Math.random() * 3 + 1);
      							}
      							else if (!IsBandwidthUp)
      							{
      								weight = Math.trunc(Math.random() * 5 + 1);
      							}
      							weightTextArray[j][i].setText(weight);
      							routerArray[j][i].name = weight;
      						}
      					}
      					//console.log("wave clear");
      					this.restart(); //restart when the previous wave is clear
      					waveClear_IL = false;
      					IsRouteComplete = false;
      					failureCount = 0;
      				}
      				if (IsAutoRouting && autoRoutingCount == 0)
      				{
      					this.add.image(910, 540, 'autoRouting');
      					costText.setText('Max. cost: -');
      					currentCostText.setText('Remain: -');
      					IsRouteComplete = true;
      					restartBtn.setScale(0); //hide restart button
      					if(startNum > 0 && endNum > 0)
      					{
      						startArray[startNum].setScale(0);
      						endArray[endNum].setScale(0);
      					}
      					//Decide the starting router
      					startNum = Math.trunc(Math.random() * 7) + 1;
      					console.log(startNum);
      					startArray[startNum].setScale(1);
      					//Decide the ending router
      					endNum = Math.trunc(Math.random() * 9);
      					console.log(endNum);
      					endArray[endNum].setScale(1);
      					//init the current node
      					currentNode[0] = startArray[startNum].x;
      					currentNode[1] = startArray[startNum].y;
      					autoRoutingCount = 1;
      					waveClear_IL = false;
      					//IsRouteComplete = false;
      				}
      				restartBtn.once('pointerup', this.restart, this);
      				if (timer_IL > shiftPace)
      				{
      					timer_IL = 0;
      				}
      				//path shift for start
      				if (currentNode[2] == 'start')
      				{
      					if ((timer_IL >= shiftPace / 8 * 0 && timer_IL < shiftPace / 8 * 1) || (timer_IL >= shiftPace / 8 * 4 && timer_IL < shiftPace / 8 * 5))
      					{
      						this.pathShift('start', 'NE');
      					}
      					else if ((timer_IL >= shiftPace / 8 * 1 && timer_IL < shiftPace / 8 * 2) || (timer_IL >= shiftPace / 8 * 3 && timer_IL < shiftPace / 8 * 4)
      						|| (timer_IL >= shiftPace / 8 * 5 && timer_IL < shiftPace / 8 * 6) || (timer_IL >= shiftPace / 8 * 7 && timer_IL < shiftPace / 8 * 8))
      					{
      						this.pathShift('start', 'E');
      					}
      					else if ((timer_IL >= shiftPace / 8 * 2 && timer_IL < shiftPace / 8 * 3) || (timer_IL >= shiftPace / 8 * 6 && timer_IL < shiftPace / 8 * 7))
      					{
      						this.pathShift('start', 'SE');
      					}
      				}
      				else if(currentNode[2] == 'router') //path shift for router
      				{
      					if (timer_IL >= 0 && timer_IL < shiftPace / 8 * 1)
      					{
      						this.pathShift('router', 'N');
      					}
      					else if (timer_IL >= shiftPace / 8 * 1 && timer_IL < shiftPace / 8 * 2)
      					{
      						this.pathShift('router', 'NE');
      					}
      					else if (timer_IL >= shiftPace / 8 * 2 && timer_IL < shiftPace / 8 * 3)
      					{
      						this.pathShift('router', 'E');
      					}
      					else if (timer_IL >= shiftPace / 8 * 3 && timer_IL < shiftPace / 8 * 4)
      					{
      						this.pathShift('router', 'SE');
      					}
      					else if (timer_IL >= shiftPace / 8 * 4 && timer_IL < shiftPace / 8 * 5)
      					{
      						this.pathShift('router', 'S');
      					}
      					else if (timer_IL >= shiftPace / 8 * 5 && timer_IL < shiftPace / 8 * 6)
      					{
      						this.pathShift('router', 'SW');
      					}
      					else if (timer_IL >= shiftPace / 8 * 6 && timer_IL < shiftPace / 8 * 7)
      					{
      						this.pathShift('router', 'W');
      					}
      					else if (timer_IL >= shiftPace / 8 * 7 && timer_IL < shiftPace)
      					{
      						this.pathShift('router', 'NW');
      					}
      				}
      				if (remainNum <= 0)
      				{
      					this.restart();
      				}
      				if (IsRouteComplete || IsAutoRouting)
      				{
      					this.routeComplete();
      				}
      				if (IsFailure == false && IsRouteComplete && (timer_IL % shiftPace * 100) == 0 && failureCount < 1 && !IsDurabilityUp && !IsAutoRouting)
      				{
      					var failureProb = Math.trunc(Math.random() * 10);
      					if (failureProb < waves - 5) //failureProb < waves
      					{
      						IsFailure = true;
      						this.createFailure();
                  errorText_IL.setText('Error: \nLink Failure');
      						console.log("Link Failure Occur");
      					}
      					else if (failureProb >= waves - 5){IsFailure = false;}
      				}
      				if (performance_IL >= 100)
      				{
      					waveClear_IL = true;
                InternetLayerErrorSolved = true;
					        }
                  }
    pathShift (nodeType, path)
    {
      				if (nodeType == 'start')
      				{
      					if (path == 'NE')
      					{
      						for (var i = 0; i < 9; i++)
      						{
      							if (currentNode[1] - 50 == startPathNEArray[i].y)
      							{
      								//console.log("NE");
      								startPathNEArray[i].setScale(1);
      								startPathEArray[i].setScale(0);
      								startPathSEArray[i].setScale(0);
      								if (spaceBar.isDown && timer_IL % timer_break == 0)
      								{
      									currentNode[0] = currentNode[0] + 200;
      									currentNode[1] = currentNode[1] - 100;
      									currentNode[2] = 'router';
      									console.log("jumped");
      									this.selectNode();
      									return;
      								}
      							}
      						}
      					}
      					else if (path == 'E')
      					{
      						for (var i = 0; i < 9; i++)
      						{
      							if (currentNode[1] == startPathEArray[i].y )
      							{
      								//console.log("E");
      								startPathEArray[i].setScale(1);
      								startPathSEArray[i].setScale(0);
      								startPathNEArray[i].setScale(0);
      								if (spaceBar.isDown && timer_IL % timer_break == 0)
      								{
      									currentNode[0] = currentNode[0] + 200;
      									currentNode[2] = 'router';
      									console.log("jumped");
      									this.selectNode();
      									return;
      								}
      							}
      						}
      					}
      					else if (path == 'SE')
      					{
      						for (var i = 0; i < 9; i++)
      						{
      							if (currentNode[1] + 50 == startPathSEArray[i].y )
      							{
      								//console.log("SE");
      								startPathSEArray[i].setScale(1);
      								startPathEArray[i].setScale(0);
      								startPathNEArray[i].setScale(0);
      								if (spaceBar.isDown && timer_IL % timer_break == 0)
      								{
      									currentNode[0] = currentNode[0] + 200;
      									currentNode[1] = currentNode[1] + 100;
      									currentNode[2] = 'router';
      									console.log("jumped");
      									this.selectNode();
      									return;
      								}
      							}
      						}
      					}
      				}
      				else if (nodeType == 'router')
      				{
      					if (path == 'N')
      					{
      						if (currentNode[1] == 140){return;} //if the current node is in the upest row, player cannot select path N.
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++)
      							{
      								if (currentNode[1] - 50 == routerPathNArray[j][i].y && currentNode[0] == routerPathNArray[j][i].x)
      								{
      									//console.log("N");
      									routerPathNArray[j][i].setScale(1);
      									routerPathNEArray[j][i].setScale(0);
      									routerPathEArray[j][i].setScale(0);
      									routerPathSEArray[j][i].setScale(0);
      									routerPathSArray[j][i].setScale(0);
      									routerPathSWArray[j][i].setScale(0);
      									routerPathWArray[j][i].setScale(0);
      									routerPathNWArray[j][i].setScale(0);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										//currentNode[0] = currentNode[0] - 200;
      										currentNode[1] = currentNode[1] - 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      					else if (path == 'NE')
      					{
      						if (currentNode[1] == 140){return;} //if the current node is in the upest row, player cannot select path NE.
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++)
      							{
      								if (currentNode[1] - 50 == routerPathNEArray[j][i].y && currentNode[0] + 100 == routerPathNEArray[j][i].x)
      								{
      									//console.log("NE");
      									routerPathNArray[j][i].setScale(0);
      									routerPathNEArray[j][i].setScale(1);
      									routerPathEArray[j][i].setScale(0);
      									routerPathSEArray[j][i].setScale(0);
      									routerPathSArray[j][i].setScale(0);
      									routerPathSWArray[j][i].setScale(0);
      									routerPathWArray[j][i].setScale(0);
      									routerPathNWArray[j][i].setScale(0);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										currentNode[0] = currentNode[0] + 200;
      										currentNode[1] = currentNode[1] - 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      					else if (path == 'E')
      					{
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++)
      							{
      								if (currentNode[0] + 100 == routerPathEArray[j][i].x && currentNode[1] == routerPathEArray[j][i].y)
      								{
      									//console.log("E");
      									routerPathNArray[j][i].setScale(0);
      									routerPathNEArray[j][i].setScale(0);
      									routerPathEArray[j][i].setScale(1);
      									routerPathSEArray[j][i].setScale(0);
      									routerPathSArray[j][i].setScale(0);
      									routerPathSWArray[j][i].setScale(0);
      									routerPathWArray[j][i].setScale(0);
      									routerPathNWArray[j][i].setScale(0);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										currentNode[0] = currentNode[0] + 200;
      										//currentNode[1] = currentNode[1] + 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      					else if (path == 'SE')
      					{
      						if (currentNode[1] == 940){return;} //if the current node is in the lowest row, player cannot select path SE.
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++)
      							{
      								if (currentNode[1] + 50 == routerPathSEArray[j][i].y && currentNode[0] + 100 == routerPathSEArray[j][i].x)
      								{
      									//console.log("SE");
      									routerPathNArray[j][i].setScale(0);
      									routerPathNEArray[j][i].setScale(0);
      									routerPathEArray[j][i].setScale(0);
      									routerPathSEArray[j][i].setScale(1);
      									routerPathSArray[j][i].setScale(0);
      									routerPathSWArray[j][i].setScale(0);
      									routerPathWArray[j][i].setScale(0);
      									routerPathNWArray[j][i].setScale(0);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										currentNode[0] = currentNode[0] + 200;
      										currentNode[1] = currentNode[1] + 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      					else if (path == 'S')
      					{
      						if (currentNode[1] == 940){return;} //if the current node is in the lowest row, player cannot select path S.
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++)
      							{
      								if (currentNode[1] + 50 == routerPathSArray[j][i].y && currentNode[0] == routerPathSArray[j][i].x)
      								{
      									//console.log("S");
      									routerPathNArray[j][i].setScale(0);
      									routerPathNEArray[j][i].setScale(0);
      									routerPathEArray[j][i].setScale(0);
      									routerPathSEArray[j][i].setScale(0);
      									routerPathSArray[j][i].setScale(1);
      									routerPathSWArray[j][i].setScale(0);
      									routerPathWArray[j][i].setScale(0);
      									routerPathNWArray[j][i].setScale(0);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										//currentNode[0] = currentNode[0] + 200;
      										currentNode[1] = currentNode[1] + 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      					else if (path == 'SW')
      					{
      						if (currentNode[1] == 940 || currentNode[0] == 510){return;} //if the current node is in the lowest row, player cannot select path SW.
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++ && timer_IL & timer_break == 0)
      							{
      								if (currentNode[1] + 50 == routerPathSWArray[j][i].y && currentNode[0] - 100 == routerPathSWArray[j][i].x)
      								{
      									//console.log("SW");
      									routerPathNArray[j][i].setScale(0);
      									routerPathNEArray[j][i].setScale(0);
      									routerPathEArray[j][i].setScale(0);
      									routerPathSEArray[j][i].setScale(0);
      									routerPathSArray[j][i].setScale(0);
      									routerPathSWArray[j][i].setScale(1);
      									routerPathWArray[j][i].setScale(0);
      									routerPathNWArray[j][i].setScale(0);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										currentNode[0] = currentNode[0] - 200;
      										currentNode[1] = currentNode[1] + 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      					else if (path == 'W')
      					{
      						if (currentNode[0] == 510){return;} //if the current node is in the leftest row, player cannot select path SW.
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++)
      							{
      								if (currentNode[0] - 100 == routerPathWArray[j][i].x && currentNode[1] == routerPathWArray[j][i].y)
      								{
      									//console.log("W");
      									routerPathNArray[j][i].setScale(0);
      									routerPathNEArray[j][i].setScale(0);
      									routerPathEArray[j][i].setScale(0);
      									routerPathSEArray[j][i].setScale(0);
      									routerPathSArray[j][i].setScale(0);
      									routerPathSWArray[j][i].setScale(0);
      									routerPathWArray[j][i].setScale(1);
      									routerPathNWArray[j][i].setScale(0);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										currentNode[0] = currentNode[0] - 200;
      										//currentNode[1] = currentNode[1] + 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      					else if (path == 'NW')
      					{
      						if (currentNode[1] == 140 || currentNode[0] == 510){return;} //if the current node is in the upest row, player cannot select path NW.
      						for (var i = 0; i < 5; i++)
      						{
      							for (var j = 0; j < 9; j++)
      							{
      								if (currentNode[1] - 50 == routerPathNWArray[j][i].y && currentNode[0] - 100 == routerPathNWArray[j][i].x)
      								{
      									//console.log("NW");
      									routerPathNArray[j][i].setScale(0);
      									routerPathNEArray[j][i].setScale(0);
      									routerPathEArray[j][i].setScale(0);
      									routerPathSEArray[j][i].setScale(0);
      									routerPathSArray[j][i].setScale(0);
      									routerPathSWArray[j][i].setScale(0);
      									routerPathWArray[j][i].setScale(0);
      									routerPathNWArray[j][i].setScale(1);
      									if (spaceBar.isDown && timer_IL % timer_break == 0)
      									{
      										currentNode[0] = currentNode[0] - 200;
      										currentNode[1] = currentNode[1] - 100;
      										currentNode[2] = 'router';
      										console.log("jumped");
      										this.selectNode();
      										return;
      									}
      								}
      							}
      						}
      					}
      				}
		}
    selectNode ()
    {
    				for (var i = 0; i < 5; i++)
    				{
    					for (var j = 0; j < 9; j++)
    					{
    						if (selectedRouterArray[j][i].x == currentNode[0] && selectedRouterArray[j][i].y == currentNode[1])
    						{
    							selectedRouterArray[j][i].setScale(1);
    							remainNum -= routerArray[j][i].name;
    							//console.log(remainNum);
    						}
    					}
    				}
    				if(currentNode[0] == endArray[endNum].x && currentNode[1] == endArray[endNum].y) //see if the routing process complete
    				{
    					console.log("routing complete");
    					IsRouteComplete = true;
    				}
    				else
    				{
    					for (var i = 0; i < 9; i++)
    					{
    						if (currentNode[0] == endArray[i].x && currentNode[1] == endArray[i].y)
    						{
    							this.restart();
    						}
    					}
    				}
    				return;
    			}
    restart ()
    {
    				console.log("restarted");
    				for (var i = 0; i < 5; i++)
    				{
    					for (var j = 0; j < 9; j++)
    					{
    						selectedRouterArray[j][i].setScale(0);
    					}
    				}
    				for (var i = 0; i < 5; i++)
    				{
    					for (var j = 0; j < 9; j++)
    					{
    						routerPathNArray[j][i].setScale(0);
    						routerPathEArray[j][i].setScale(0);
    						routerPathSArray[j][i].setScale(0);
    						routerPathWArray[j][i].setScale(0);
    						routerPathNEArray[j][i].setScale(0);
    						routerPathSEArray[j][i].setScale(0);
    						routerPathSWArray[j][i].setScale(0);
    						routerPathNWArray[j][i].setScale(0);
    					}
    				}
    				for (var i = 0; i < 9; i++)
    				{
    					startPathNEArray[i].setScale(0);
    					startPathEArray[i].setScale(0);
    					startPathSEArray[i].setScale(0);
    				}
    				remainNum = costNum;
    				currentNode[0] = startArray[startNum].x;
    				currentNode[1] = startArray[startNum].y;
    				currentNode[2] = 'start';
    				if (IsAutoRouting)
    				{
    					waveClear_IL = true;
    					IsRouteComplete = true;
    					failureCount = 0;
    				}
    				//failureCount = 0;
    				//performance_IL = 0;
    				return;
    			}
    routeComplete ()
    {
    				//console.log("hi");
    				if (timer_IL % (shiftPace) == 0 && failureCount <= 1 && performance_IL < 100 && IsRouteComplete)
    				{
              performance_IL += 50;
              performanceText_IL.setText("Sending: " + performance_IL);
              console.log(performance_IL);
    				}
    			}
    createFailure ()
    {
    				failureCount = 1;
    				console.log("failure created");
    				this.restart();
    				IsFailure = false;
    				IsRouteComplete = false;
    				performance_IL = 0;
    				//failureCount = 0;
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
            this.load.image('deviceIcon','assets/image/Network_Access-Layer/device.png');
            this.load.audio('click', 'assets/audio/clicking-1.mp3');
    				//Added by Ambrose
    				this.load.image('background', 'assets/image/Network_Access-Layer/background_test.png');
    				this.load.image('socket', 'assets/image/Network_Access-Layer/socket.png');
    				this.load.image('wire', 'assets/image/Network_Access-Layer/wire.png');
    				this.load.spritesheet('wireSprite', 'assets/image/Network_Access-Layer/wireSprite.png', { frameWidth: 1500, frameHeight: 25, endFrame: 7 });
    				this.load.image('mouse', 'assets/image/Network_Access-Layer/mouse.png');
    				this.load.image('mouseTrap', 'assets/image/Network_Access-Layer/mouseTrap.png');
    				this.load.image('highFreq', 'assets/image/Network_Access-Layer/highFreq.png');
    				this.load.image('rubbishBin', 'assets/image/Network_Access-Layer/rubbishBin.png');
    				this.load.image('restartbtn', 'assets/image/Network_Access-Layer/restart.png');
    				this.load.image('twistedPairCable', 'assets/image/Network_Access-Layer/twistedPairCable.png');
        }
        create() {
            let error = false;
            let graphics = this.add.graphics();
            var click = this.sound.add('click');
            // add an area to collect all input, prevent from clicking the elements in other layer
            this.add.zone(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight).setInteractive().setOrigin(0);
            graphics.fillStyle(0x4ef542, 1);
            // fillRect(x, y, width, height)
            //graphics.fillRect(leftMargin, topMargin + topBarHeight + componentMargin, gameAreaWidth, gameAreaHeight); // game area
            this.add.image(leftMargin + gameAreaWidth+90, topMargin + topBarHeight + componentMargin + 3.5 * gameIConHeight, 'deviceIcon', 1)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                this.scene.bringToTop();
                click.play();
                //NetworkAccessLayerErrorSOLVED = true; // debug use
            })
            .setScale(0.7);
            this.add.text(leftMargin + gameAreaWidth+34, topMargin + topBarHeight + componentMargin + 3.5 * gameIConHeight+50,'Network\nAccess\nLayer',{ font: '24px Courier', fill: '#fff', align: 'center',
            });
    				this.add.image(810, 540, 'background').setScale(5/3);
    				for(var i = 0; i < 5; i++)
    				{
    					this.add.image(35, 240 + 150 * i, 'socket'); //input socket
    					outputSocket = this.add.image(1585, 240 + 150 * i, 'socket'); //output socket
    					outputSocket.rotation += 3.141592653589793238462643383279502884197169; //rotation
    					wires[i] = this.add.image(810, 240 + 150 * i, 'wireSprite', 0);
    					twistedPairCableUP[i] = this.add.image(810, 215 + 150 * i, 'twistedPairCable').setScale(0);
    					twistedPairCableLOW[i] =this.add.image(810, 265 + 150 * i, 'twistedPairCable').setScale(0);
    					mouses[i] = this.add.image(810, 202 + 150 * i, 'mouse').setScale(0);
    					mouses[i].setInteractive();
    					highFreqs[i] = this.add.image(810, 272 + 150 * i, 'highFreq').setScale(0); //you can change the position by yourself
    					highFreqs[i].setInteractive();
    					this.input.setDraggable(highFreqs[i]);
    				}
    				bitstormResetBtn = this.add.image(810, 930, 'restartbtn').setScale(0);
    				bitstormResetBtn.setInteractive();
    				mouses[0].on('pointerup', function (){mouses[0].setScale(0); IsMouse = false; IsNormal = true; disasterNow = false;}, this);
    				mouses[1].on('pointerup', function (){mouses[1].setScale(0); IsMouse = false; IsNormal = true; disasterNow = false;}, this);
    				mouses[2].on('pointerup', function (){mouses[2].setScale(0); IsMouse = false; IsNormal = true; disasterNow = false;}, this);
    				mouses[3].on('pointerup', function (){mouses[3].setScale(0); IsMouse = false; IsNormal = true; disasterNow = false;}, this);
    				mouses[4].on('pointerup', function (){mouses[4].setScale(0); IsMouse = false; IsNormal = true; disasterNow = false;}, this);
    				rubbishBin = this.add.image(810, 930, 'rubbishBin').setScale(0);
    				bitstormResetBtn.on('pointerup', function (){bitstormResetBtn.setScale(0); IsBitstorm = false; IsNormal = true; disasterNow = false;}, this);
		      }
        update() {
  				timer_NAL++;
  				disasterTimer++;
  				if (disasterTimer >= 200)
  				{
  					disasterTimer = 0;
  				}
  				if (timer_NAL >= 200)
  				{
  					timer_NAL = 0;
  				}
  					if (IsNormal)
  					{
  						if (timer_NAL >= 0 && timer_NAL < 40){this.changeFrame(0);}
  						else if (timer_NAL >= 40 && timer_NAL < 80){this.changeFrame(1);}
  						else if (timer_NAL >= 80 && timer_NAL < 120){this.changeFrame(2);}
  						else if (timer_NAL >= 120 && timer_NAL < 160){this.changeFrame(3);}
  						else if (timer_NAL >= 160 && timer_NAL < 200){this.changeFrame(4);}
  					}
  					else if (IsEMF)
  					{
  						this.changeFrameDisaster(5, wireToEMF);
  					}
  					else if (IsMouse)
  					{
  						this.changeFrameDisaster(6, wireToMouse);
  					}
  					else if (IsBitstorm)
  					{
  						if (timer_NAL >= 0 && timer_NAL < 40){this.changeFrame(5);}
  						else if (timer_NAL >= 40 && timer_NAL < 80){this.changeFrame(7);}
  						else if (timer_NAL >= 80 && timer_NAL < 120){this.changeFrame(5);}
  						else if (timer_NAL >= 120 && timer_NAL < 160){this.changeFrame(7);}
  						else if (timer_NAL >= 160 && timer_NAL < 200){this.changeFrame(5);}
  					}
    				this.createDisaster();
    				if (IsTwistedPairCable)
    				{
    					for (var i = 0; i < 5; i++)
    					{
    						twistedPairCableUP[i].setScale(1);
    						twistedPairCableLOW[i].setScale(1);
    					}
    				}
    				if (IsMousetrap)
    				{
    					for (var i = 0; i < 5; i++)
    					{
    						this.add.image(810, 202 + 150 * i, 'mouseTrap');
    					}
    				}
    				if (IsVoltageRegulator)
    				{
    					//Randy, please add a voltage regulator image here
    				}
    				if (disasterCount >= waves / 2 && !disasterNow)
    				{
    					waveClear_NAL = true;
						      NetworkAccessLayerErrorSOLVED = true;
              NetworkAccessLayerERROR = false;
    					console.log("NAL wave clear");
    				}
    				if (waveClear_NAL)
    				{
    					disasterCount = 0;
    					waveClear_NAL = false;
    					//console.log("Next wave");
    				}
        }
		changeFrame(frameNum)
		{
			for (var i = 0; i < 5; i++)
			{
				wires[i].frame = wires[i].scene.textures.getFrame('wireSprite', frameNum);
			}
		}
		changeFrameDisaster(frameNum, wireNum)
		{
			wires[wireNum].frame = wires[wireNum].scene.textures.getFrame('wireSprite', frameNum);
		}
		createDisaster ()
		{
			if (disasterTimer == 199 && disasterCount < waves / 2)
			{
				var disasterProb = Math.trunc(Math.random() * 10) + 1; //1 - 10
				if (disasterProb >= waves + 5){
        //console.log("NAL: safe");
        return;}
				else if (disasterProb < waves + 5)
				{
        NetworkAccessLayerERROR = true;
					var disasterType = Math.trunc(Math.random() * 3); //0 - 2
					if (disasterType == 0 && IsNormal)
					{
						if (IsTwistedPairCable){disasterCount++; return;}
						IsEMF = true;
						IsNormal = false;
						wireToEMF = Math.trunc(Math.random() * 5); //0 - 4
						highFreqs[wireToEMF].setScale(1);
						var highFreqX = highFreqs[wireToEMF].x;
						var highFreqY = highFreqs[wireToEMF].y;
						rubbishBin.setScale(1);
						disasterNow = true;
						this.input.on('drag', function(pointer, obj, dragX, dragY){
							dragX = Math.trunc(dragX);
							dragY = Math.trunc(dragY);
							//set drag position
							obj.setPosition(dragX, dragY);
							if((obj.x <= 810 + 50 && obj.x >= 810 - 50) && (obj.y <= 930 + 50 && obj.y >= 930 - 50))
							{
								obj.setPosition(highFreqX, highFreqY);
								highFreqs[wireToEMF].setScale(0);
								rubbishBin.setScale(0);
								IsNormal = true;
								IsEMF = false;
								   disasterNow = false;
							}
						});
						console.log("EMF!");
						disasterCount++;
					}
					else if (disasterType == 1 && IsNormal)
					{
						if (IsMousetrap){disasterCount++; return;}
						IsMouse = true;
						IsNormal = false;
						wireToMouse = Math.trunc(Math.random() * 5); //0 - 4
						mouses[wireToMouse].setScale(1);
						  disasterNow = true;
						console.log("Mouse!");
						disasterCount++;
					}
					else if (disasterType == 2 && IsNormal)
					{
						if (IsVoltageRegulator){disasterCount++; return;}
						IsBitstorm = true;
						IsNormal = false;
						bitstormResetBtn.setScale(1);
						disasterNow = true;
						console.log("Bitstorm!");
						disasterCount++;
					}
				}
			}
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

class Hints extends Phaser.Scene{
  constructor() {
      super({
          key: 'Hints',
          active: true
      })
  }
  preload(){
    this.load.spritesheet('lightBulb', 'assets/image/light-bulb-Sprite.png', {frameWidth: 625, frameHeight: 1175});
    this.pressed = false;
  }
  create(){
    this.scene.sendToBack();
    this.scene.moveAbove('BottomBar');
    this.anims.create({
        key: 'lightBlubAnim',
        frames: this.anims.generateFrameNumbers('lightBulb', { start: 0, end: 1}),
        frameRate: 3,
        repeat: -1
    });
    this.lightBulb = this.add.sprite(screenWidth-70,screenHeight-140,'lightBulb')
      .setScale(0.14)
      .setInteractive({useHandCursor: true})
      .on('pointerdown', () => {
        waves += 1; // bug use, this is
        if(!this.pressed){
          this.scene.bringToTop();
          this.pressed = true;
        }else{
          this.pressed = false;
          this.scene.sendToBack();
          this.scene.moveAbove('BottomBar');
        }
      })
      ;
    this.lightBulb.anims.play('lightBlubAnim',true);
    let graphics = this.add.graphics();
    graphics.fillStyle(0x6b2500, 1);
    // bottom bar
    graphics.fillRoundedRect(screenWidth/4, screenHeight/4, screenWidth/2, screenHeight/2);
  }
  update(){
  }
}
// Change service
function changeService(){
    var index = Phaser.Math.Between(1, 3);
    ApplicationLayerService = service[index];
    console.log('The service now is:' + ApplicationLayerService);
}
// buy something
function buying(itemIndex){
    var price = gameItems[itemIndex][3]; // get price
    this.indexOfAlreadyOwn; // the index in inventory array that player already have
    this.alreadyOwn = false; // if player already have that item
    //console.table(inventory);
    if(coinsCheck(price)){ // if sufficient coins
        coins -= price; // deduct coins
        // see if there is already a item bought
        for(var i = 1 ; i < inventory.length ; i++){
            // create a new object to store the idex(i) value
                let idxObj = {};
                idxObj.idx = i;
            // determine if player has process that item by comparing the item IDs
            if(inventory[i][0] == gameItems[itemIndex][0]){
                this.indexOfAlreadyOwn = idxObj.idx;
                this.alreadyOwn = true;
                //console.log("Already have!");
            }else{
                this.alreadyOwn = false;
                //console.log("Doesn't have");
            }
        }
        if(this.alreadyOwn) inventory[this.indexOfAlreadyOwn][5] += 1;
        else inventory.push(gameItems[itemIndex].slice()); // by using .slice, we pass the value of gameItem[itemIndex] instead of the reference
        inventoryChange = true; // indicate there is a change in inventory
        return true
    }else{
      //console.log("insufficient coins!");
      return false
    }
}
// Apply item
function applyItem(itemIndex){
    //console.table(gameItems);
    // first, determine what layer the item belongs to
    // second, know whether the item is that layer expecting
    // last, know what item is used
    if(gameItems[itemIndex][1] == 1){ // Application Layer
      console.log("the skillItems belongs to Application Layer");
      // if the appliying item match what application expecting
      if(gameItems[itemIndex][0] == applicationLayerActiveSkillItems){
          if(gameItems[itemIndex][2] == "Anti-WannaCry") applicationLayerSkillItems_WannaCry_Applied = true;
          else if(gameItems[itemIndex][2] == "Blue Death Solver") applicationLayerSkillItems_BlueDeathSpeedUp_Applied = true;
          return true
      // SPECIAL CASE: Auto update is an active item, alway expected
      }else if(gameItems[itemIndex][2] == "Auto Update"){
        applicationLayerSkillItems_StopUpdate_Applied = true;
        return true
      // NOT SO SPECIAL CASE: BlueDeath solver  is an active item, alway expected
      }else if(gameItems[itemIndex][2] == "BlueDeath Solver"){
        applicationLayerSkillItems_BlueDeathSolution_Applied = true;
        return true;
      // USUAL SPECIAL CASE: BlueDeath solver  is an active item, alway expected
      }else if(gameItems[itemIndex][2] == "WannaLaugh"){
        applicationLayerSkillItems_WannaLaugh_Applied = true;
        return true;
      // No match
      }else{
        return false
      }
    }else if(gameItems[itemIndex][1] == 2){ // Transport Layer
      console.log("the skillItems belongs to Transport Layer");
      if(gameItems[itemIndex][2] == "Port Algorithm") {
        IsPortAlgo = true;
        return true
      }else if(gameItems[itemIndex][2] == "Order Algorithm"){
        IsOrderAlgo = true;
        return true
      }else if(gameItems[itemIndex][2] == "Resend Algorithm"){
        IsResendAlgo = true;
        return true
      }
    }else if(gameItems[itemIndex][1] == 3){ // Internet Layer
      console.log("the skillItems belongs to Internet Layer");
      if(gameItems[itemIndex][2] == "Auto Routing"){
        console.log("auto routing!");
        IsAutoRouting = true;
        return true
      }
      else return false
    }else if(gameItems[itemIndex][1] == 4){ // Network Access Layer
      console.log("the skillItems belongs to Network Access Layer");
      if(gameItems[itemIndex][2] == "Mouse Trap") {
        IsMousetrap = true;
        return true
      }else if(gameItems[itemIndex][2] == "Twisted Pair Cable"){
        IsTwistedPairCable = true;
        return true
      }else if(gameItems[itemIndex][2] == "Voltage Regulator"){
        IsVoltageRegulator = true;
        return true
      }
    }else{
      return false
    }
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
    if(waves<=9) wavesTxt.setText("Wave:0"+waves);
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
				portName = service[1];
                TransportLayerService = service[1];
				console.log(portName);
				//console.log('Current Port is ' + currentPort);
				portCount = 2;
			}
			else if (portCount == 2)
			{
				setPortFrame(port, portCount);
				portName = service[3];
                TransportLayerService = service[3];
				console.log(portName);
				//console.log('Current Port is ' + currentPort);
				portCount = 0;
			}
			else if (portCount == 0)
			{
				setPortFrame(port, portCount);
				portName = service[2];
                TransportLayerService = service[2];
				console.log(portName);
				//console.log('Current Port is ' + currentPort);
				portCount = 1;
			}
	}
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
		for (var i = 0; i < waves; i++)
		{
			corruptBlock = Math.trunc(Math.random() * 10);
			//console.log(corruptBlock);
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
RK ACCESS LAYER FUNCTIONS
// REDUNDANT FUNCTION
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
// Description: Create Buttons based on the sprite name sheet.
// WHY THIS FUNCTION: To create sprites like broken tubes, tubes, computer and animation.
function makeButton(name, x, y, sprite)
{
    var button = this.add.image(x, y, sprite, 1).setInteractive();
    button.name = name;
    button.setScale(2, 1.5);
    return button;
}
// Description: Check if the spritesheet name is "mouseXX"
// WHY THIS FUNCTION?: To Check that the player is always pressed
// to the mouse sprite and only execute subsequent functions like replaceTube() and animPlay()
function matchStringMouse(spriteName)
{
    if(spriteName.startsWith('mouse'))
    {
        return true;
    }
    return false;
}
// Description: Replace broken tube sprites to OK ones.
function repairTube(button)
{
    //if (button == null) return;
    console.log(button.name);
    button.setTexture('pipe');
}
// REDUNDANT FUNCTION
function setFrame(button, frame)
{
    button.frame = button.scene.textures.getFrame('pipe', frame);
}
// Description: Kill the mouse, repair the tubes and play the animation
function killPests(mouse, tubes, boom)
{
    for (let i = 0; i < mouse.length; i++)
        mouse[i].setVisible(false);
    EMCoat(tubes, boom);
}
// Description: Repair the tubes and play the animation
function EMCoat(button, boom)
{
    for (let i = 0; i < button.length; i++)
        button[i].setTexture('pipe');
    animPlay(boom)
}
// Description: Play the animation according to each element.
function animPlay(boom)
{
    for (let i = 0; i < boom.length; i++)
        boom[i].setVisible('true');
}
// Description: Check if all pests and wires are fixed
// WHY THIS FUNCTION: TO INCIDATE IF THIS LAYER IS CLEARED.
//                    Since the pest tool and the EMCoat tool repairs the tubes, the main factor is to see if all mouse are cleared.
//                    Just check if all mouse are gone is fine.
function checkNATLayerClear(mouse, tubes)
{
    // If mouse all set the false.
    for (let i = 0; i < mouse.length; i++)
    {
        if(mouse[i].visible == false)
        {
            continue;
        }
        else
        {
            return false;
        }
    }
    return true;
}
// END OF NETWORK ACCESS LAYER FUNCTIONS
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
            //debugLayer,
            //Hints,
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
