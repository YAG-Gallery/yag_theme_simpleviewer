<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2010 Daniel Lienert <daniel@lienert.cc>, Michael Knoll <knoll@punkt.de>
*  All rights reserved
*
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
 * Class reads the exconf of this theme and provides the path to simpleViewer
 * 
 * @author Daniel Lienert <daniel@lienert.cc>
 * @package ViewHelpers
 */
class Tx_YagThemeSimpleviewer_ViewHelpers_SimpleViewerPathViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractTagBasedViewHelper {

	public function render() { 
		$extConfVarString = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['yag_theme_simpleviewer'];
		$extConfSettings = unserialize($extConfVarString);
		$simpleViewerPath = trim($extConfSettings['simpleViewerSourcePath']);
		
		$absolutePath = t3lib_div::getFileAbsFileName($simpleViewerPath);
		
		if(!is_dir($absolutePath)) {
			throw new Exception('Error while trying to find the simpleViewer package. The path ' . $absolutePath . ' does not exist! 1301659264');
		}
		
		if(substr($simpleViewerPath,-1,1) != '/') $simpleViewerPath .= '/';
		
		return $simpleViewerPath;
	}
}