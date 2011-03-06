####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.simpleViewer {
	
	resolutionConfigs {
		thumb {
			width = 150
			height = 
			quality = 
		}
		
		medium {
			width = 800
			height = 800
		}
	}
	
	controller {
		ItemList {
			list.template = EXT:yag_theme_simpleviewer/Resources/Private/Templates/ItemList/List.html
			xmlList.template = EXT:yag_theme_simpleviewer/Resources/Private/Templates/ItemList/XmlList.html
		}
	}
	
	# Simpleviewer configuration
	##################################
	showAlbumTitle = 1
	showImageTitle = 1
	
	# Simpleviewer embed configuration
	##################################
	galleryWidth = 100%
	galleryHeight = 100%
	backgroundColor = 222222
	backgroundTransparent = true
	
	
	# Simpleviewer flash configuration
	##################################
	
	# MODERN, COMPACT, CLASSIC
	galleryStyle = MODERN	
	
	thumbColumns = 4
	thumbRows = 4
	frameColor = 0x2F2F2F
	textColor = 0x2F2F2F
	frameWidth = 2
	thumbPosition = LEFT
	showOpenButton = TRUE
	showFullscreenButton = TRUE
}

plugin.tx_yag.settings.theme = simpleViewer
	
# SimpleViewer XML
YAGXML_SimpleViewer < YAGXML
YAGXML_SimpleViewer {
	typeNum = 89657201
	config.no_cache = 0
	10 < tt_content.list.20.yag_xmllist
}

