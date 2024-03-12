// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button7")
                .setLeft("11.428571428571429em")
                .setTop("6.095238095238095em")
                .setWidth("9.82857142857143em")
                .setHeight("4.3428571428571425em")
                .setCaption("SM HOME")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.SM HOME INVENTORY",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setLeft("22.095238095238095em")
                .setTop("6.095238095238095em")
                .setWidth("9.82857142857143em")
                .setHeight("4.3428571428571425em")
                .setCaption("SURPLUS")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.SURPLUS INVENTORY",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button12")
                .setLeft("11.428571428571429em")
                .setTop("11.428571428571429em")
                .setWidth("9.82857142857143em")
                .setHeight("4.3428571428571425em")
                .setCaption("UPTREND")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button13")
                .setLeft("22.095238095238095em")
                .setTop("11.428571428571429em")
                .setWidth("9.82857142857143em")
                .setHeight("4.3428571428571425em")
                .setCaption("NURSERY")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setLeft("11.428571428571429em")
                .setTop("16.761904761904763em")
                .setWidth("9.82857142857143em")
                .setHeight("4.3428571428571425em")
                .setCaption("WALTER OR")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button15")
                .setLeft("22.095238095238095em")
                .setTop("16.761904761904763em")
                .setWidth("9.82857142857143em")
                .setHeight("4.3428571428571425em")
                .setCaption("WHSE INVENTORY")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});