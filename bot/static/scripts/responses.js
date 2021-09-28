function getBotResponse(input) {
    //rock paper scissors
    if (input == "bonjour") {
        return "bonjour";
    } else if (input == "ca va") {
        return "je vis super bien";
    }

    // Simple responses
    if (input == "tu fais quoi") {
        return "je rend des services";
    } else if (input == "au revoir") {
        return "ok reviens quand tu veux";
    } else {
        return "je sais pas bien after revien jsuis buzi";
    }
}