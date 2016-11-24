Onebook.Namespace("Widget.LayoutConfig");
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["WidgetComponents"],factory);
    } else {
        Onebook.Widget.LayoutConfig = factory(Onebook.Widget);
    }
}(this, function (Widget) {
    var config = [
        {
            id: [5, 15, 502, 430],
            template: "Temp_1X2"
        }
        ,
        {
            id: [1, 7, 17],
            template: "Temp_Handicap"
        }
        ,
        {
            id: [3, 8, 401, 402, 403, 404, 18],
            template: "Temp_OverUnder"
        }
        ,
        {
            id: [2, 12, 428],
            template: "Temp_OddEven"
        }
        ,
        {
            id: [20,21,501],
            template: "Temp_MoneyLine"
        }
        ,
        {
            id: [4],
            template: "Temp_CorrectScore"
        }
        ,
        {
            id: [30],
            template: "Temp_1stCorrectScore"
        }
        ,
        {
            id: [16],
            template: "Temp_HTFT"
        }
        ,
        {
            id: [14, 127],
            template: "Temp_FGLG"
        }
        ,
        {
            id: [6],
            template: "Temp_TotalGoal"
        }
        ,
        {
            id: [126],
            template: "Temp_1HTotalGoal"
        }
        ,
        {
            id: [128],
            template: "Temp_HTFTOddEven"
        }
        ,
        {
            id: [24],
            template: "Temp_DoubleChance"
        }
        ,
        {
            id: [151,186,410,431],
            template: "Temp_1stDoubleChance"
        }
        ,
        {
            id: [25,27, 185, 191, 168,411,432],
            template: "Temp_DrawNoBet"
        }
        ,
        {
            id: [121],
            template: "Temp_HomeNoBet"
        }
        ,
        {
            id: [122],
            template: "Temp_AwayNoBet"
        }
        ,
        {
            id: [123],
            template: "Temp_DrawNoDraw"
        }
        ,
        {
            id: [28],
            template: "Temp_3WayHandicap"
        }
        ,
        {
            id: [13],
            template: "Temp_CleanSheet"
        }
        ,
        {
            id: [26],
            template: "Temp_BothOneNeitherTeamToScore"
        }
        ,
        {
            id: [133, 134, 135, 145, 146 ,147 , 148, 149, 150, 433, 436, 437, 438, 439, 440, 441, 427, 434, 435],
            template: "Temp_BetradarYesNo"
        }
        ,
        {
            id: [140 , 141 , 142, 442, 443, 444],
            template: "Temp_HighestScoringHalf"
        }
        ,
        {
            id: [416],
            template: "Temp_HTFTCorrectScore"
        }
        ,
        {
            id: [413],
            template: "Temp_FTCorrectScore"
        }
        ,
        {
            id: [414, 405],
            template: "Temp_1HCorrectScore_new"
        }
        ,
        {
            id: [159, 406],
            template: "Temp_ExactTotalGoals"
        }
        ,
        {
            id: [161,162,181,182,407,409,412,429],
            template: "Temp_ExactTeamGoals"
        }
        ,
        {
            id: [171, 408, 426],
            template: "Temp_WinningMargin"
        },
        {
            id: [172, 415],
            template: "Temp_1X2FirstTeamToScore"
        },
        {
            id: [163, 144],
            template: "Temp_ResultTotalGoalsOverUnder"
        },
        {
            id: [417],
            template: "Temp_BothTeamScoreResult"
        },
        {
            id: [418],
            template: "Temp_BothTeamsToScoreTotalGoal"
        },
        {
            id: [419, 420, 421],
            template: "Temp_WhichHalfFirstGoal"
        },
        {
            id: [422, 423],
            template: "Temp_FirstTeam2Goals"
        },
        {
            id: [424],
            template: "Temp_FirstGoalMethod"
        },
        {
            id: [425],
            template: "Temp_ToWinFromBehind"
        },
        {
            id: [445, 446, 447],
            template: "Temp_BothTeamToScoreIn1H2H"
        }
    ];
    var OddsDispDef = {
        SortBettype: [5, 20, 21, 1, 3, 2, 15, 7, 8, 12, 501, 502],
        SortBettypeByMatch: [5, 15, 1, 7, 3, 8, 4,413,414,405, 30, 416, 16, 14, 127, 26, 6, 126, 2, 12, 128, 20, 21, 24,410, 151, 25,411, 121, 122, 123, 28, 13, 145, 146, 27, 425, 149, 150, 133, 134, 147, 
                            148, 140, 141, 142, 135,408, 426, 401,402,403,404,406,407,409,412,429,501,502,430,17,18,428,431,432,433,436,437,438,439,440,441,427,434,435,442,443,444,415,144 ,417,418,
                            419, 420, 421, 422, 423, 424, 445, 446, 447]
    };

    var mapping = null; // format = {	b5:{head:.., body:....},	b15:{} , b3 :{} }
    var buildMapping = function () {
        mapping = { ByGroup: {}, ByMatch: {}};
        config.forEach(function (c) {
            c.id.forEach(function (id) {
                mapping.ByGroup["b" + id] = Widget.Temp.ByGroup[c.template];
                mapping.ByMatch["b" + id] = Widget.Temp.ByMatch[c.template];
            });
        });
    }
    var getLayout = function (bettype, scope) {
        if (!mapping) { buildMapping(); }
        var id = 'b' + bettype;
        return (scope === 1 ? mapping.ByMatch[id] : mapping.ByGroup[id]);
    }
    return { getLayout: getLayout, OddsDispDef: OddsDispDef };
}));
