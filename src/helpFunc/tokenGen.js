var rand = function() {
    return Math.random().toString(36).substr(2);
};

export var token = function() {
    return rand() + rand();
};