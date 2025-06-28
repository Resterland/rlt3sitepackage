<?php

declare(strict_types=1);
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') or die();

$key = 'rlt3sitepackage_basiccontent';

// Adds the content element to the "Type" dropdown
ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    [
        'label' => 'Basic Text Element',
        'value' => $key,
        'icon' => 'content-idea',
        'group' => 'default',
    ],
    'header',
    'before',
);

// Configure the default backend fields for the content element
$GLOBALS['TCA']['tt_content']['types'][$key] = [
    'showitem' => '
            --palette--;;headers,
            bodytext,
        ',
];
