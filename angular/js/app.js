angular.module('myApp',[])
.directive('markdown',function () {
	var converter = new Showdown.converter();
	var editTemplate='<textarea ng-show="isEditMode" ng-dblclick="switchToPreview()" rows="10" cols="10" ng-model="markdown"></textarea>';
	var previewTemplate='<div ng-hide="isEditMode" ng-dblclick="switchToEdit()">Preview</div>';
	return {
		restrict: 'E',
		compile:function(tElement,tAttr,transclude){
			var markdown=tElement.text();
			tElement.html(editTemplate);
			var previewElement = angular.element(previewTemplate);
			tElement.append(previewElement);
			return function(scope,element,attrs){
				scope.isEditMode=true;
				scope.markdown=markdown;
				scope.switchToPreview=function(){
					var makeHtml=converter.makeHtml(scope.markdown);
					previewElement.html(makeHtml);
					scope.isEditMode=false;
				}
				scope.switchToEdit=function(){
					scope.isEditMode=true;
				}
			}
		}
	}
});