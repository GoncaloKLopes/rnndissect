var REVIEWS_FILE = "assets/reviews.json"
var input_flag = false
var available_input_selected = null
var available_model_selected = null


$(document).ready(function() {
    //SET INPUT MODAL
    $("#set_input").children("span").click(function() {
        if (!input_flag){
            input_flag = true
            $.getJSON(REVIEWS_FILE, function(json) {
                $.each(json, function(key, val) {
                    $("#available-inputs").append("<li>" + val.text +"</li>")
                })
            })
        }
        $("#set_input_modal").modal({
            keyboard: false
        })
    })

    $("#set-input-text").on("keyup", function() {
        if($(this).val().length > 0){
            $("#set-input-save").removeClass("inactive")
            $(available_input_selected).removeClass("available-input-selected")
        }
        else {
            $("#set-input-save").addClass("inactive")
        }
    })
    $("#available-inputs").on("click", "li", function() {
        if (available_input_selected != null || available_input_selected == this) {
            $(available_input_selected).removeClass("available-input-selected")
        }
        if(available_input_selected != this) {
            $(this).addClass("available-input-selected")
            available_input_selected = this
            $("#set-input-save").removeClass("inactive")
        }
        else {
            available_input_selected = null
            $("#set-input-save").addClass("inactive")
        } 
    })

    $("#set-input-save").on("click", function() {
        //TODO
    })

    $("#set-input-cancel").on("click", function() {
        $("#set-input-text").val("")

        $(available_input_selected).removeClass("available-input-selected")
        available_input_selected = null
        $("#set-input-save").addClass("inactive")
        $("#set_input_modal").modal("hide")
    })

    //SET MODEL MODAL
    $("#set-model").children("span").click(function() {
        $("#set-model-modal").modal({
            keyboard: false
        })
    })

    $("#available-models").on("click", "li", function() {
        if (available_model_selected != null || available_model_selected == this) {
            $(available_model_selected).removeClass("available-model-selected")
        }
        if(available_model_selected != this) {
            $(this).addClass("available-model-selected")
            available_model_selected = this
            $("#set-model-save").removeClass("inactive")
        }
        else {
            available_model_selected = null
            $("#set-model-save").addClass("inactive")
        } 
    })

    $("#set-model-save").on("click", function() {
        //TODO
    })

    $("#set-model-cancel").on("click", function() {
        $(available_model_selected).removeClass("available-model-selected")
        available_model_selected = null
        $("#set-model-save").addClass("inactive")
        $("#set-model-modal").modal("hide")
    })


})

