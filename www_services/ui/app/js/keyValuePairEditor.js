var KeyValuePairEditor = function($option) {var _DEFAULT_OPTION = {inputElement: null,licenseType: null,keyHeader: 'Name',keyTips: "",valueHeader: 'Value',valueTips: "",addPairBtnText: 'Add',separator: ";",delimiter: "="};var _UI_TEMPLATE_EDITOR = $('<div class="form-group row mb-3">' +'  <div class="col-md-3 label-inline label-key-header" align="center"><label></label></div>' +'  <div class="col-md-3 label-inline label-value-header" align="center"><label></label></div>' +'</div>' +'<div class="pair-item-container"></div>');var _UI_TEMPLATE_PAIR_ITEM = $('<div class="form-group row mb-3 pair-item-group" ispaid="true">' +'  <div class="col-md-3 input-inline pair-item-key">' +'    <input type="text" class="form-control pair-item-key-input rsb-form-nosubmit" data-bs-toggle="popover" data-container="body" data-bs-html="true" data-bs-trigger="hover" keyvalidate="true">' +'  </div>' +'  <div class="col-md-3 input-inline pair-item-value">' +'    <input type="text" class="form-control pair-item-value-input rsb-form-nosubmit" data-bs-toggle="popover" data-container="body" data-bs-html="true" data-bs-trigger="hover" valuevalidate="true">' +'  </div>' +'  <button type="button" class="btn-close pull-left btn-remove-pair" style="margin-top:6px !important"></button>' +'</div>');var _UI_TEMPLATE_ADD_BUTTON = $('<div class="form-group row mb-3" ispaid="true">' +'  <button type="button" class="btn btn-outline-secondary btn-add-pair col-md-3 input-inline text-nowrap flex-basis-content" style="margin-left:15px !important"></button>' +'</div>');var _POPOVER_OPTIONS = {container: "body",html: true,trigger: "hover",placement: "top"};var option = $.extend({}, _DEFAULT_OPTION, $option);var pairContainer = $();var inputElement = $();var saveValue = "";var parseSettingValue = function($settingValue) {var result = {};if ($settingValue) {var state = 0;var escape = false;var key = "";var value = "";var buffer = "";for (var i in $settingValue) {var c = $settingValue[i];switch (c) {case '\\':
if (escape) {buffer += c;escape = false} else {escape = true}
break;case option.delimiter:
if (escape) {buffer += c;escape = false} else {key = buffer.trim();buffer = ""}
break;case option.separator:
if (escape) {buffer += c;escape = false} else {value = buffer.trim();buffer = "";if (key) {result[key] = value;key = ""}}
break;default:
if (escape) {escape = false;buffer += '\\'}
buffer += c;break}}
if (buffer) {if (key) {result[key] = buffer} else {result[buffer] = ""}} else {if (key) {result[key] = ""}}}
return result}
var buildSettingValue = function($pairs) {var result = "";var separator = "";for (var key in $pairs) {result += separator + escape(key) + option.delimiter + ($pairs[key] != undefined ? escape($pairs[key]) : "");separator = option.separator}
return result}
var escape = function($str) {var result = "";for (var i in $str) {var c = $str[i];if (c == option.delimiter || c == option.separator) {result += '\\'}
result += c}
return result}
var addPair = function($container, $key, $value, $updateSavedValue) {var ui = _UI_TEMPLATE_PAIR_ITEM.clone();ui.find(".pair-item-key-input").on("change", onPairChange).val($key);if (option.keyTips) ui.find(".pair-item-key-input").popover($.extend({}, _POPOVER_OPTIONS, {content: option.keyTips}));if ($updateSavedValue) ui.find(".pair-item-key-input")[0].defaultValue = $key;ui.find(".pair-item-value-input").on("change", onPairChange).val($value);if (option.keyTips) ui.find(".pair-item-value-input").popover($.extend({}, _POPOVER_OPTIONS, {content: option.valueTips}));if ($updateSavedValue) ui.find(".pair-item-value-input")[0].defaultValue = $value;ui.find(".btn-remove-pair").click(onRemovePair);$container.append(ui)}
var refreshContainer = function($pairs, $updateSavedValue) {pairContainer.find(".pair-item-group").remove();if (Object.keys($pairs).length > 0) {for (var key in $pairs) {addPair(pairContainer, key, $pairs[key], $updateSavedValue)}} else {addPair(pairContainer, "", "", $updateSavedValue);pairContainer.find(".pair-item-group>button").hide()}}
var buildPairs = function() {var pairs = {};pairContainer.find(".pair-item-group").each(function() {var key = $(this).find(".pair-item-key-input").val();var value = $(this).find(".pair-item-value-input").val();if (key) {pairs[key] = value}});return pairs}
var updateInputElement = function() {var $pairs = buildPairs();inputElement.val(buildSettingValue($pairs));inputElement.trigger("change", {"rsb.keyValuePairEditor.onPairChange": true});if (Object.keys($pairs).length <= 0 && pairContainer.find(".pair-item-group").length == 1 && pairContainer.find(".pair-item-group>.pair-item-value-input").length <= 0) {pairContainer.find(".pair-item-group>button").hide()} else {pairContainer.find(".pair-item-group>button").show()}}
var onRemovePair = function() {var pair = $(this).closest(".pair-item-group");if (pair.closest(".pair-item-container").find(".pair-item-group").length <= 1) {pair.find(".pair-item-key-input").val("");pair.find(".pair-item-value-input").val("")} else {pair.remove()}
updateInputElement()}
var onAddPair = function() {addPair(pairContainer, "", "", true);updateInputElement()}
var onPairChange = function() {updateInputElement()}
var onInputChange = function($event, $eventData) {if (!$eventData || !$eventData["rsb.keyValuePairEditor.onPairChange"]) {var pairs = parseSettingValue(inputElement.val());refreshContainer(pairs, true)}}
var onCheckUnsave = function() {if (saveValue != inputElement.val()) {var hasUnsaved = false;pairContainer.find("input").each(function($index, $elem) {if ($elem.defaultValue != $elem.value) {hasUnsaved = true;$($elem).parents("div.form-group").addClass("has-warning")}});if (!hasUnsaved) {pairContainer.find("div.form-group").addClass("has-warning")}
return true}}
this.setPairValue = function($key, $value) {if ($key != undefined) {var pairs = buildPairs();pairs[$key] = $value;refreshContainer(pairs, true)}}
this.getPairValue = function($key) {if ($key != undefined) {var pairs = buildPairs();return pairs[$key]}}
this.removePair = function($key) {if ($key != undefined) {var pairs = buildPairs();delete pairs[$key];refreshContainer(pairs, true)}}
this.destroyPopover = function(){$(".pair-item-group  [data-bs-toggle='popover']").popover('dispose')}
this.syncSavedValue = function() {this.destroyPopover();var pairs = buildPairs();refreshContainer(pairs, true);saveValue = inputElement.val()}
this.valid = function() {var keys = pairContainer.find(".pair-item-key-input");for (var i = 0; i < keys.length; i++) {if (!$(keys[i]).valid()) {return false}}
var values = pairContainer.find(".pair-item-value-input");for (var i = 0; i < values.length; i++) {if (!$(values[i]).valid()) {return false}}
return true}
if (option.inputElement) {inputElement = option.inputElement;var editorUI = _UI_TEMPLATE_EDITOR.clone();if (option.licenseType) {editorUI.attr("ispaid", option.licenseType)}
editorUI.find(".label-key-header label").text(option.keyHeader);editorUI.find(".label-value-header label").text(option.valueHeader);pairContainer = editorUI.filter(".pair-item-container");var pairs = parseSettingValue(inputElement.val());refreshContainer(pairs, true);var addPairBtn = _UI_TEMPLATE_ADD_BUTTON.clone();addPairBtn.find(".btn-add-pair").text(option.addPairBtnText).click(onAddPair);addPairBtn.insertAfter(inputElement);editorUI.insertAfter(inputElement);inputElement.change(onInputChange);inputElement.data("rsb.checkUnsave", onCheckUnsave);saveValue = inputElement.val()}
if (option.keyValidate) {$.validator.addMethod("keyvalidate", function($value) {return option.keyValidate($value)}, option.keyValidateErrorMessage)}
if (option.valueValidate) {$.validator.addMethod("valuevalidate", function($value) {return option.valueValidate($value)}, option.valueValidateErrorMessage)}
if (option.afterInit) {option.afterInit()}}
