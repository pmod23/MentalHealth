const full = [
    {
        "question": "How many employees does your company have?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "6-25",
                "key": "a"
            },
            {
                "text": "26-100",
                "key": "b"
            },
            {
                "text": "101-500",
                "key": "c"
            },
            {
                "text": "501-1000",
                "key": "d"
            },
            {
                "text": "More than 1000",
                "key": "e"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 11.2,
                "b": 14.8,
                "c": 26.3,
                "d": 8.9,
                "e": 36.5
            }
        }
    },
    {
        "question": "Does your employer provide mental health benefits as part of healthcare coverage?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "I don't know",
                "key": "b"
            },
            {
                "text": "No",
                "key": "c"
            },
            {
                "text": "Not eligible for coverage / NA",
                "key": "d"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 53.9,
                "b": 28.6,
                "c": 11.5,
                "d": 5.9
            }
        }
    },
    {
        "question": "Do you know the options for mental health care available under your employer-provided health coverage?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "No",
                "key": "a"
            },
            {
                "text": "Yes",
                "key": "b"
            },
            {
                "text": "N/A",
                "key": "c"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 48.7,
                "b": 42.8,
                "c": 8.6
            }
        }
    },
    {
        "question": "Has your employer ever formally discussed mental health (for example, as part of a wellness campaign or other official communication)?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "No",
                "key": "a"
            },
            {
                "text": "Yes",
                "key": "b"
            },
            {
                "text": "I don't know",
                "key": "c"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 57.9,
                "b": 34.2,
                "c": 7.9
            }
        }
    },
    {
        "question": "Does your employer offer resources to learn more about mental health disorders and options for seeking help?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "No",
                "key": "a"
            },
            {
                "text": "Yes",
                "key": "b"
            },
            {
                "text": "I don't know",
                "key": "c"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 42.8,
                "b": 33.6,
                "c": 23.7
            }
        }
    },
    {
        "question": "Is your anonymity protected if you choose to take advantage of mental health or substance abuse treatment resources provided by your employer?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "I don't",
                "key": "a"
            },
            {
                "text": "Yes",
                "key": "b"
            },
            {
                "text": "No",
                "key": "c"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 61.8,
                "b": 33.2,
                "c": 4.9
            }
        }
    },
    {
        "question": "If a mental health issue prompted you to request a medical leave from work, how easy or difficult would it be to ask for that leave?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Somewhat easy",
                "key": "a"
            },
            {
                "text": "Very easy",
                "key": "b"
            },
            {
                "text": "I don't know",
                "key": "c"
            },
            {
                "text": "Somewhat difficult",
                "key": "d"
            },
            {
                "text": "Neither easy nor difficukt",
                "key": "e"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 27.3,
                "b": 23.0,
                "c": 17.1,
                "d": 16.1,
                "e": 10.2
            }
        }
    },
    {
        "question": "Would you feel comfortable discussing a mental health issue with your direct supervisor(s)?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "Maybe",
                "key": "b"
            },
            {
                "text": "No",
                "key": "c"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 38.5,
                "b": 31.2,
                "c": 30.3
            }
        }
    },
    {
        "question": "Have you ever discussed your mental health with your employer?",
        "type": "yes-no",
        "data": {
            "answered": 304,
            "breakdown": {
                "yes": 32.9,
                "now": 67.1
            }
        }
    },
    {
        "question": "Would you feel comfortable discussing a mental health issue with your coworkers?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Maybe",
                "key": "a"
            },
            {
                "text": "Yes",
                "key": "b"
            },
            {
                "text": "No",
                "key": "c"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 42.1,
                "b": 29.3,
                "c": 28.6
            }
        }
    },
    {
        "question": "Have you ever discussed your mental health with coworkers?",
        "type": "yes-no",
        "data": {
            "answered": "301",
            "breakdown": {
                "yes": 47.8,
                "no": 52.2
            }
        }
    },
    {
        "question": "Have you ever had a coworker discuss their or another coworkers mental health with you?",
        "type": "yes-no",
        "data": {
            "answered": 304,
            "breakdown": {
                "yes": 46.7,
                "no": 53.3
            }
        }
    },
    {
        "question": "Overall, how much importance does your employer place on mental health?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "None",
                "key": "a"
            },
            {
                "text": "Some",
                "key": "b"
            },
            {
                "text": "A great deal",
                "key": "c"
            }
        ],
        "data": {
            "answered": 304,
            "breakdown": {
                "a": 6.9,
                "b": 23.0,
                "c": 3.9
            }
        }
    },
    {
        "question": "Do you have medical coverage (private insurance or state-provided) that includes treatment of mental health disorders?",
        "type": "yes-no",
        "data": {
            "answered": 48,
            "breakdown": {
                "yes": 66.7,
                "no": 33.3
            }
        }
    },
    {
        "question": "Do you know local or online resources to seek help for a mental health issue?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "No, I don't know",
                "key": "a"
            },
            {
                "text": "I know some",
                "key": "b"
            },
            {
                "text": "Yes, I know several",
                "key": "c"
            }
        ],
        "data": {
            "answered": 48,
            "breakdown": {
                "a": 37.5,
                "b": 35.4,
                "c": 27.1
            }
        }
    },
    {
        "question": "If you have been diagnosed or treated for a mental health disorder, do you ever reveal this to coworkers or employees?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Not applicable to me",
                "key": "a"
            },
            {
                "text": "Sometimes, if it comes up",
                "key": "b"
            },
            {
                "text": "No, because it doesn't matter",
                "key": "c"
            },
            {
                "text": "No, because it would impact me negatively",
                "key": "d"
            },
            {
                "text": "Yes, always",
                "key": "e"
            }
        ],
        "data": {
            "answered": 48,
            "breakdown": {
                "a": 43.8,
                "b": 35.4,
                "c": 10.4,
                "d": 6.2,
                "e": 4.2
            }
        }
    },

    {
        "question": "If you have revealed a mental health disorder to a coworker or employee, how has this impacted you or the relationship?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Not applicable to me",
                "key": "a"
            },
            {
                "text": "I'm not sure",
                "key": "b"
            },
            {
                "text": "No change",
                "key": "c"
            },
            {
                "text": "Positively",
                "key": "d"
            },
            {
                "text": "Negatively",
                "key": "e"
            }
        ],
        "data": {
            "answered": 48,
            "breakdown": {
                "a": 52.1,
                "b": 25.0,
                "c": 10.4,
                "d": 10.4,
                "e": 2.1
            }
        }
    },

    {
        "question": "Do you believe your productivity is ever affected by a mental health issue?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "Unsure",
                "key": "b"
            },
            {
                "text": "Not applicable to me",
                "key": "c"
            },
            {
                "text": "No",
                "key": "d"
            }
        ],
        "data": {
            "answered": 48,
            "breakdown": {
                "a": 77.1,
                "b": 12.5,
                "c": 8.3,
                "d": 2.1
            }
        }
    },

    {
        "question": "If yes, what percentage of your work time (time performing primary or secondary job functions) is affected by a mental health issue?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "1-25",
                "key": "a"
            },
            {
                "text": "26-50",
                "key": "b"
            },
            {
                "text": "51-75",
                "key": "c"
            },
            {
                "text": "76-100",
                "key": "d"
            }
        ],
        "data": {
            "answered": 37,
            "breakdown": {
                "a": 43.2,
                "b": 29.7,
                "c": 16.2,
                "d": 10.8
            }
        }
    },

    {
        "question": "Do you currently have a mental health disorder?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "No",
                "key": "b"
            },
            {
                "text": "Possibly",
                "key": "c"
            },
            {
                "text": "I don't Know",
                "key": "d"
            }
        ],
        "data": {
            "answered": 352,
            "breakdown": {
                "a": 41.8,
                "b": 29.5,
                "c": 21.3,
                "d": 7.4
            }
        }
    },

    {
        "question": "Have you ever diagnosed with a mental health disorder?",
        "type": "yes-no",
        "data": {
            "answered": 147,
            "breakdown": {
                "yes": 98.0,
                "no": 2.0
            }
        }
    },

    {
        "question": "If possibly, what disorder(s) do you believe you have?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Mood Disorder (Depression, Bipolar Disorder, etc)",
                "key": "a"
            },
            {
                "text": "Anxiety Disorder (Generalized, Social, Phobia, etc)",
                "key": "b"
            },
            {
                "text": "Personality Disorder (Borderline, Antisocial, Paranoid, etc)",
                "key": "c"
            },
            {
                "text": "Stress Response Syndromes",
                "key": "d"
            },
            {
                "text": "Attention Deficit Hyperactivity Disorder",
                "key": "e"
            },
            {
                "text": "Obsessive-Compulsive Disorder",
                "key": "f"
            },
            {
                "text": "Substance Use Disorder",
                "key": "g"
            },
            {
                "text": "Post-traumatic Stress Disorder",
                "key": "h"
            },
            {
                "text": "Eating Disorder (Anorexia, Bulimia, etc)",
                "key": "i"
            },
            {
                "text": "Addictive Disorder",
                "key": "j"
            },
            {
                "text": "Dissociative Disorder",
                "key": "k"
            },
            {
                "text": "Psychotic Disorder (Schizophrenia, Schizoaffective, etc)",
                "key": "l"
            },
            {
                "text": "Other",
                "key": "m"
            }
        ],
        "data": {
            "answered": 72,
            "breakdown": {
                "a": 73.6,
                "b": 70.8,
                "c": 16.7,
                "d": 15.3,
                "e": 13.9,
                "f": 11.1,
                "g": 9.7,
                "h": 8.3,
                "i": 6.9,
                "j": 5.6,
                "k": 2.8,
                "l": 0.0,
                "m": 1.4
            }
        }
    },

    {
        "question": "If possibly, what disorder(s) do you believe you have?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Mood Disorder (Depression, Bipolar Disorder, etc)",
                "key": "a"
            },
            {
                "text": "Anxiety Disorder (Generalized, Social, Phobia, etc)",
                "key": "b"
            },
            {
                "text": "Attention Deficit Hyperactivity Disorder",
                "key": "c"
            },
            {
                "text": "Post-traumatic Stress Disorder",
                "key": "d"
            },
            {
                "text": "Eating Disorder (Anorexia, Bulimia, etc)",
                "key": "e"
            },
            {
                "text": "Obsessive-Compulsive Disorder",
                "key": "f"
            },
            {
                "text": "Stress Response Syndromes",
                "key": "g"
            },
            {
                "text": "Dissociative Disorder",
                "key": "h"
            },
            {
                "text": "Psychotic Disorder (Schizophrenia, Schizoaffective, etc)",
                "key": "i"
            },
            {
                "text": "Personality Disorder (Borderline, Antisocial, Paranoid, etc)",
                "key": "j"
            },
            {
                "text": "Substance Use Disorder",
                "key": "k"
            },
            {
                "text": "Addictive Disorder",
                "key": "l"
            },
            {
                "text": "Other",
                "key": "m"
            }
        ],
        "data": {
            "answered": 144,
            "breakdown": {
                "a": 70.1,
                "b": 68.1,
                "c": 21.5,
                "d": 16.0,
                "e": 9.7,
                "f": 9.0,
                "g": 5.6,
                "h": 4.2,
                "i": 4.2,
                "j": 3.5,
                "k": 3.5,
                "l": 0.7,
                "m": 2.1
            }
        }
    },

    {
        "question": "Have you had a mental health disorder in the past?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "No",
                "key": "b"
            },
            {
                "text": "Possibly",
                "key": "c"
            },
            {
                "text": "I don't Know",
                "key": "d"
            }
        ],
        "data": {
            "answered": 349,
            "breakdown": {
                "a": 41.8,
                "b": 30.7,
                "c": 20.6,
                "d": 6.9
            }
        }
    },

    {
        "question": "Have you ever sought treatment for a mental health disorder from a mental health professional?",
        "type": "yes-no",
        "data": {
            "answered": 352,
            "breakdown": {
                "yes": 61.6,
                "no": 38.4
            }
        }
    },

    {
        "question": "Do you have a family history of mental illness?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "No",
                "key": "b"
            },
            {
                "text": "I don't Know",
                "key": "c"
            }
        ],
        "data": {
            "answered": 352,
            "breakdown": {
                "a": 45.2,
                "b": 30.4,
                "c": 24.4
            }
        }
    }
]

const min = [
    {
        "question": "If you have revealed a mental health disorder to a coworker or employee, how has this impacted you or the relationship?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Not applicable to me",
                "key": "a"
            },
            {
                "text": "I'm not sure",
                "key": "b"
            },
            {
                "text": "No change",
                "key": "c"
            },
            {
                "text": "Positively",
                "key": "d"
            },
            {
                "text": "Negatively",
                "key": "e"
            }
        ],
        "data": {
            "answered": 48,
            "breakdown": {
                "a": 52.1,
                "b": 25.0,
                "c": 10.4,
                "d": 10.4,
                "e": 2.1
            }
        }
    },

    {
        "question": "Do you believe your productivity is ever affected by a mental health issue?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "Unsure",
                "key": "b"
            },
            {
                "text": "Not applicable to me",
                "key": "c"
            },
            {
                "text": "No",
                "key": "d"
            }
        ],
        "data": {
            "answered": 48,
            "breakdown": {
                "a": 77.1,
                "b": 12.5,
                "c": 8.3,
                "d": 2.1
            }
        }
    },

    {
        "question": "If yes, what percentage of your work time (time performing primary or secondary job functions) is affected by a mental health issue?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "1-25",
                "key": "a"
            },
            {
                "text": "26-50",
                "key": "b"
            },
            {
                "text": "51-75",
                "key": "c"
            },
            {
                "text": "76-100",
                "key": "d"
            }
        ],
        "data": {
            "answered": 37,
            "breakdown": {
                "a": 43.2,
                "b": 29.7,
                "c": 16.2,
                "d": 10.8
            }
        }
    },

    {
        "question": "Do you currently have a mental health disorder?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "No",
                "key": "b"
            },
            {
                "text": "Possibly",
                "key": "c"
            },
            {
                "text": "I don't Know",
                "key": "d"
            }
        ],
        "data": {
            "answered": 352,
            "breakdown": {
                "a": 41.8,
                "b": 29.5,
                "c": 21.3,
                "d": 7.4
            }
        }
    },

    {
        "question": "Have you ever diagnosed with a mental health disorder?",
        "type": "yes-no",
        "data": {
            "answered": 147,
            "breakdown": {
                "yes": 98.0,
                "no": 2.0
            }
        }
    },

    {
        "question": "If possibly, what disorder(s) do you believe you have?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Mood Disorder (Depression, Bipolar Disorder, etc)",
                "key": "a"
            },
            {
                "text": "Anxiety Disorder (Generalized, Social, Phobia, etc)",
                "key": "b"
            },
            {
                "text": "Personality Disorder (Borderline, Antisocial, Paranoid, etc)",
                "key": "c"
            },
            {
                "text": "Stress Response Syndromes",
                "key": "d"
            },
            {
                "text": "Attention Deficit Hyperactivity Disorder",
                "key": "e"
            },
            {
                "text": "Obsessive-Compulsive Disorder",
                "key": "f"
            },
            {
                "text": "Substance Use Disorder",
                "key": "g"
            },
            {
                "text": "Post-traumatic Stress Disorder",
                "key": "h"
            },
            {
                "text": "Eating Disorder (Anorexia, Bulimia, etc)",
                "key": "i"
            },
            {
                "text": "Addictive Disorder",
                "key": "j"
            },
            {
                "text": "Dissociative Disorder",
                "key": "k"
            },
            {
                "text": "Psychotic Disorder (Schizophrenia, Schizoaffective, etc)",
                "key": "l"
            },
            {
                "text": "Other",
                "key": "m"
            }
        ],
        "data": {
            "answered": 72,
            "breakdown": {
                "a": 73.6,
                "b": 70.8,
                "c": 16.7,
                "d": 15.3,
                "e": 13.9,
                "f": 11.1,
                "g": 9.7,
                "h": 8.3,
                "i": 6.9,
                "j": 5.6,
                "k": 2.8,
                "l": 0.0,
                "m": 1.4
            }
        }
    },

    {
        "question": "If possibly, what disorder(s) do you believe you have?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Mood Disorder (Depression, Bipolar Disorder, etc)",
                "key": "a"
            },
            {
                "text": "Anxiety Disorder (Generalized, Social, Phobia, etc)",
                "key": "b"
            },
            {
                "text": "Attention Deficit Hyperactivity Disorder",
                "key": "c"
            },
            {
                "text": "Post-traumatic Stress Disorder",
                "key": "d"
            },
            {
                "text": "Eating Disorder (Anorexia, Bulimia, etc)",
                "key": "e"
            },
            {
                "text": "Obsessive-Compulsive Disorder",
                "key": "f"
            },
            {
                "text": "Stress Response Syndromes",
                "key": "g"
            },
            {
                "text": "Dissociative Disorder",
                "key": "h"
            },
            {
                "text": "Psychotic Disorder (Schizophrenia, Schizoaffective, etc)",
                "key": "i"
            },
            {
                "text": "Personality Disorder (Borderline, Antisocial, Paranoid, etc)",
                "key": "j"
            },
            {
                "text": "Substance Use Disorder",
                "key": "k"
            },
            {
                "text": "Addictive Disorder",
                "key": "l"
            },
            {
                "text": "Other",
                "key": "m"
            }
        ],
        "data": {
            "answered": 144,
            "breakdown": {
                "a": 70.1,
                "b": 68.1,
                "c": 21.5,
                "d": 16.0,
                "e": 9.7,
                "f": 9.0,
                "g": 5.6,
                "h": 4.2,
                "i": 4.2,
                "j": 3.5,
                "k": 3.5,
                "l": 0.7,
                "m": 2.1
            }
        }
    },

    {
        "question": "Have you had a mental health disorder in the past?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "No",
                "key": "b"
            },
            {
                "text": "Possibly",
                "key": "c"
            },
            {
                "text": "I don't Know",
                "key": "d"
            }
        ],
        "data": {
            "answered": 349,
            "breakdown": {
                "a": 41.8,
                "b": 30.7,
                "c": 20.6,
                "d": 6.9
            }
        }
    },

    {
        "question": "Have you ever sought treatment for a mental health disorder from a mental health professional?",
        "type": "yes-no",
        "data": {
            "answered": 352,
            "breakdown": {
                "yes": 61.6,
                "no": 38.4
            }
        }
    },

    {
        "question": "Do you have a family history of mental illness?",
        "type": "multiple-choice",
        "choices": [
            {
                "text": "Yes",
                "key": "a"
            },
            {
                "text": "No",
                "key": "b"
            },
            {
                "text": "I don't Know",
                "key": "c"
            }
        ],
        "data": {
            "answered": 352,
            "breakdown": {
                "a": 45.2,
                "b": 30.4,
                "c": 24.4
            }
        }
    }

]

export default full;
