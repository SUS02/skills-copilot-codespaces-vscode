function skillsMember(){
    return { 
        restrict: 'E', 
        templateUrl: 'modules/skillsMember.views.member.html',
        controller:'SkillsMemberController',
        controllerAs: 'vm', 
        bindToController: true,
        scope: {
        member: ''
        }
    };
}