function skillsMember(){
    return {
        restrict : 'E',
        templateUrl : modules/skills/views/skillsMember.html,
        controller : 'vm',
        bindToController : true,
        scope : {
            member : ' '
        }
    };
}