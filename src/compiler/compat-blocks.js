/**
 * @fileoverview List of blocks to be supported in the compiler compatibility layer.
 * This is only for native blocks. Extensions should not be listed here.
 */

// Please keep these lists alphabetical.
// no >:(
// haha cry about it - jerem

const statementBlocks = [
    'control_clear_counter',
    'control_incr_counter',
    'control_decr_counter',
    'control_set_counter',
    'looks_hideallsprites',
    'looks_say',
    'looks_sayforsecs',
    'looks_setstretchto',
    'looks_switchbackdroptoandwait',
    'looks_think',
    'looks_thinkforsecs',
    'motion_align_scene',
    'motion_glidesecstoxy',
    'motion_glideto',
    'motion_goto',
    'motion_pointtowards',
    'motion_scroll_right',
    'motion_scroll_up',
    'sensing_askandwait',
    'sensing_setdragmode',
    'sound_changeeffectby',
    'sound_changevolumeby',
    'sound_cleareffects',
    'sound_play',
    'sound_playuntildone',
    'sound_stop',
    'sound_seteffectto',
    'sound_setvolumeto',
    'sound_stopallsounds',
    "looks_setStretch",
    "data_reverselist",
    "data_arraylist",
    "control_switch",
    "control_switch_default",
    "control_case",
    "control_exitCase",
    "control_case_next",
    "control_backToGreenFlag",
    'looks_setHorizTransform',
    'looks_setVertTransform',
    'looks_layersSetLayer',
    'control_waitsecondsoruntil',
    'control_delete_clones_of',
    'control_stop_sprite',
    'looks_changeVisibilityOfSprite',
    'looks_previouscostume',
    'looks_previousbackdrop',
    'motion_pointinrandomdirection',
    'motion_move_sprite_to_scene_side',
    'sound_playallsounds',
    'looks_stoptalking',
    'sensing_setclipboard',
    'motion_movebacksteps',
    'motion_moveupdownsteps',
    'motion_turnrightaroundxy',
    'motion_turnleftaroundxy',
    'motion_turnaround',
    'motion_pointinrandomdirection',
    'motion_pointtowardsxy',
    'motion_glidedirectionstepsinseconds',
    'motion_changebyxy',
    'motion_ifonspritebounce',
    'motion_ifonxybounce',
    'motion_move_sprite_to_scene_side',
    'control_javascript_command'
];

const outputBlocks = [
    'control_get_counter',
    'motion_xscroll',
    'motion_yscroll',
    'sensing_loud',
    'sensing_loudness',
    'sensing_userid',
    'sound_volume',
    "control_if_return_else_return",
    "looks_stretchGetX",
    "looks_stretchGetY",
    "sensing_getspritewithattrib",
    "sensing_thing_is_text",
    "sensing_mobile",
    "sensing_thing_is_number",
    "sensing_regextest",
    "operator_indexOfTextInText",
    "operator_randomBoolean",
    "operator_falseBoolean",
    "operator_trueBoolean",
    "operator_constrainnumber",
    "operator_advMath",
    "operator_lerpFunc",
    "operator_stringify",
    "operator_newLine",
    "operator_readLineInMultilineText",
    "operator_getLettersFromIndexToIndexInText",
    "operator_replaceAll",
    "operator_regexmatch",
    "data_itemexistslist",
    "data_listisempty",
    "data_listarray",
    "looks_sayHeight",
    "looks_sayWidth",
    "sensing_isUpperCase",
    "operator_toUpperLowerCase",
    "looks_getSpriteVisible",
    "looks_getEffectValue",
    'looks_layersGetLayer',
    'sound_isSoundPlaying',
    'sound_getEffectValue',
    'sound_getLength',
    "sensing_directionTo",
    "sensing_distanceTo",
    "operator_boolify",
    "operator_tabCharacter",
    "operator_character_to_code",
    "operator_code_to_character",
    "sensing_keyhit",
    "sensing_mousescrolling",
    "sensing_mouseclicked",
    "sensing_thing_has_text",
    "sensing_thing_has_number",
    "sensing_objecttouchingobject",
    'looks_getOtherSpriteVisible',
    'operator_gtorequal',
    'operator_ltorequal',
    'operator_notequal',
    'operator_join3',
    'operator_replaceFirst',
    'operator_lastIndexOfTextInText',
    'operator_countAppearTimes',
    'operator_textIncludesLetterFrom',
    'operator_textStartsOrEndsWith',
    'sensing_fingerdown',
    'sensing_fingertapped',
    'sensing_fingerx',
    'sensing_fingery',
    'sensing_getclipboard',
    'sensing_getdragmode',
    'sensing_getoperatingsystem',
    'sensing_getbrowser',
    'sensing_geturl',
    'operator_javascript_output',
    'operator_javascript_boolean',
    'sensing_getxyoftouchingsprite'
];

module.exports = {
    statementBlocks,
    outputBlocks
};
