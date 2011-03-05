####################################################
# Static template for RSS Feeds from YAG
#
# @author Daniel Lienert <daniel@lienert.cc> 
# @author Michael Knoll <mimi@kaktusteam.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.default.itemList {
	itemsPerPage = 0
	columnCount = 4
}


##########################################################
# Settings for simpleViewer XML
##########################################################

xml = PAGE
xml {
  typeNum = 200
  10 = USER
  10 {
    userFunc = tx_extbase_dispatcher->dispatch
    pluginName = Pi1
    extensionName = Yag
    controller = ItemList
    action = rss
    switchableControllerActions {
        1 {
            controller = Feeds
            actions = rss
        }
    }
    settings =< plugin.tx_yag.settings
    persistence =< plugin.tx_yag.persistence
    view =< plugin.tx_yag.view
  }
   
  config {
    disableAllHeaderCode = 1
    additionalHeaders = Content-type:application/xml
    xhtml_cleaning = 0
    admPanel = 0
  }
  
}