import angular from "angular";

import messageController from "./messageController";
import messageFactory from "./messageFactory";

angular.module("app", [])
    .factory("messageFactory", messageFactory)
    .controller("messageController", messageController)
;
