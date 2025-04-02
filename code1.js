gdjs.adminCode = {};
gdjs.adminCode.localVariables = [];
gdjs.adminCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.adminCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.adminCode.GDadmin_9595codeObjects1= [];
gdjs.adminCode.GDadmin_9595codeObjects2= [];
gdjs.adminCode.GDNewTextObjects1= [];
gdjs.adminCode.GDNewTextObjects2= [];
gdjs.adminCode.GDWhiteDecoratedButton2Objects1= [];
gdjs.adminCode.GDWhiteDecoratedButton2Objects2= [];
gdjs.adminCode.GDNewText2Objects1= [];
gdjs.adminCode.GDNewText2Objects2= [];
gdjs.adminCode.GDWhiteDecoratedButton3Objects1= [];
gdjs.adminCode.GDWhiteDecoratedButton3Objects2= [];
gdjs.adminCode.GDWhiteDecoratedButton4Objects1= [];
gdjs.adminCode.GDWhiteDecoratedButton4Objects2= [];


gdjs.adminCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("admin_code"), gdjs.adminCode.GDadmin_9595codeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.adminCode.GDadmin_9595codeObjects1.length;i<l;++i) {
    if ( gdjs.adminCode.GDadmin_9595codeObjects1[i].getBehavior("Text").getText() == "2012" ) {
        isConditionTrue_0 = true;
        gdjs.adminCode.GDadmin_9595codeObjects1[k] = gdjs.adminCode.GDadmin_9595codeObjects1[i];
        ++k;
    }
}
gdjs.adminCode.GDadmin_9595codeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.adminCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.adminCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.adminCode.GDWhiteDecoratedButton4Objects1);
{for(var i = 0, len = gdjs.adminCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.adminCode.GDWhiteDecoratedButton2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.adminCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.adminCode.GDWhiteDecoratedButton4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.adminCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.adminCode.GDNewText2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("admin_code"), gdjs.adminCode.GDadmin_9595codeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.adminCode.GDadmin_9595codeObjects1.length;i<l;++i) {
    if ( !(gdjs.adminCode.GDadmin_9595codeObjects1[i].getBehavior("Text").getText() == "2012") ) {
        isConditionTrue_0 = true;
        gdjs.adminCode.GDadmin_9595codeObjects1[k] = gdjs.adminCode.GDadmin_9595codeObjects1[i];
        ++k;
    }
}
gdjs.adminCode.GDadmin_9595codeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.adminCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.adminCode.GDWhiteDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.adminCode.GDWhiteDecoratedButton4Objects1);
{for(var i = 0, len = gdjs.adminCode.GDWhiteDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.adminCode.GDWhiteDecoratedButton2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.adminCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.adminCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.adminCode.GDWhiteDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.adminCode.GDWhiteDecoratedButton4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton2"), gdjs.adminCode.GDWhiteDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.adminCode.GDWhiteDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.adminCode.GDWhiteDecoratedButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.adminCode.GDWhiteDecoratedButton2Objects1[k] = gdjs.adminCode.GDWhiteDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.adminCode.GDWhiteDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "a9862bfa-07ca-4894-82fe-f20e3a340c91", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton3"), gdjs.adminCode.GDWhiteDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.adminCode.GDWhiteDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.adminCode.GDWhiteDecoratedButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.adminCode.GDWhiteDecoratedButton3Objects1[k] = gdjs.adminCode.GDWhiteDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.adminCode.GDWhiteDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton4"), gdjs.adminCode.GDWhiteDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.adminCode.GDWhiteDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.adminCode.GDWhiteDecoratedButton4Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.adminCode.GDWhiteDecoratedButton4Objects1[k] = gdjs.adminCode.GDWhiteDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.adminCode.GDWhiteDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "00663a68-1126-400a-ac96-3a4d69dd72c1", true);
}}

}


};

gdjs.adminCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.adminCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.adminCode.GDadmin_9595codeObjects1.length = 0;
gdjs.adminCode.GDadmin_9595codeObjects2.length = 0;
gdjs.adminCode.GDNewTextObjects1.length = 0;
gdjs.adminCode.GDNewTextObjects2.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.adminCode.GDNewText2Objects1.length = 0;
gdjs.adminCode.GDNewText2Objects2.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton3Objects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton3Objects2.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton4Objects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton4Objects2.length = 0;

gdjs.adminCode.eventsList0(runtimeScene);
gdjs.adminCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.adminCode.GDadmin_9595codeObjects1.length = 0;
gdjs.adminCode.GDadmin_9595codeObjects2.length = 0;
gdjs.adminCode.GDNewTextObjects1.length = 0;
gdjs.adminCode.GDNewTextObjects2.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton2Objects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton2Objects2.length = 0;
gdjs.adminCode.GDNewText2Objects1.length = 0;
gdjs.adminCode.GDNewText2Objects2.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton3Objects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton3Objects2.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton4Objects1.length = 0;
gdjs.adminCode.GDWhiteDecoratedButton4Objects2.length = 0;


return;

}

gdjs['adminCode'] = gdjs.adminCode;
