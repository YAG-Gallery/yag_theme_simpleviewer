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
			maxW = 150
		}
		
		medium {
			maxW = 800
			maxH = 800
		}
	}
	
	includeCSS > 
	
	controller {
		ItemList {
			list.template = EXT:yag_theme_simpleviewer/Resources/Private/Templates/ItemList/List.html
			xmlList.template = EXT:yag_theme_simpleviewer/Resources/Private/Templates/ItemList/XmlList.html
		}
	}
	
	# Simpleviewer configuration
	##################################
	showAlbumTitle = {$config.yag_theme_simpleviewer.showAlbumTitle}
	showImageTitle = {$config.yag_theme_simpleviewer.showImageTitle}
	
	
	# Simpleviewer embed configuration
	##################################
	
	galleryWidth = {$config.yag_theme_simpleviewer.galleryWidth}
	galleryHeight = {$config.yag_theme_simpleviewer.galleryHeight}
	backgroundColor = {$config.yag_theme_simpleviewer.backgroundColor}
	backgroundTransparent = {$config.yag_theme_simpleviewer.backgroundTransparent}
	
	
	# Simpleviewer flash configuration
	##################################
	
	# MODERN, COMPACT, CLASSIC
	galleryStyle = {$config.yag_theme_simpleviewer.galleryStyle}	
	
	thumbColumns = {$config.yag_theme_simpleviewer.thumbColumns}
	thumbRows = {$config.yag_theme_simpleviewer.thumbRows}
	frameColor = {$config.yag_theme_simpleviewer.frameColor}
	textColor = {$config.yag_theme_simpleviewer.textColor}
	frameWidth = {$config.yag_theme_simpleviewer.frameWidth}
	thumbPosition = {$config.yag_theme_simpleviewer.thumbPosition}
	showOpenButton = {$config.yag_theme_simpleviewer.showOpenButton}
	showFullscreenButton = {$config.yag_theme_simpleviewer.showFullscreenButton}
}

plugin.tx_yag.settings.theme = simpleViewer
	
# SimpleViewer XML
YAGXML_SimpleViewer < YAGXML
YAGXML_SimpleViewer {
	typeNum = 89657201
	config.no_cache = 0
	10 < tt_content.list.20.yag_xmllist
}

