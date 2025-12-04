{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Interaction Analyzer v0.1\
// \uc0\u1054 \u1087 \u1088 \u1077 \u1076 \u1077 \u1083 \u1077 \u1085 \u1080 \u1077  \u1090 \u1080 \u1087 \u1072  \u1074 \u1079 \u1072 \u1080 \u1084 \u1086 \u1076 \u1077 \u1081 \u1089 \u1090 \u1074 \u1080 \u1103  \u1085 \u1072  \u1086 \u1089 \u1085 \u1086 \u1074 \u1077  \u1089 \u1086 \u1073 \u1099 \u1090 \u1080 \u1103 \
\
export class InteractionAnalyzer \{\
    classify(event) \{\
        if (event.text?.endsWith("?")) \{\
            return "question";\
        \}\
\
        if (event.type === "command") \{\
            return "command";\
        \}\
\
        if (event.type === "preference") \{\
            return "preference";\
        \}\
\
        return "unknown";\
    \}\
\
    analyze(event) \{\
        return \{\
            original: event,\
            type: this.classify(event),\
            timestamp: Date.now()\
        \};\
    \}\
\}\
}
