let comments = [
  {
    comment: "Someone reply",
    subComment: [
      {
        comment: "Hi, i am guru",
      },
      {
        comment: "Hello, its mahesh",
        subComment: "How are you Mahesh?",
      },
    ],
  },
  {
    comment: "I am from bangalore",
    subComment: [
      {
        comment: "Hi, i am from Delhi",
        subComment: [
          {
            comment: "Nice to meet you!",
            subComment: [
              {
                comment: "Planning to come to Bangalore, anytime?",
              },
              {
                comment: "Sometime soon. How's the weather?",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    comment: "Is anyone studying enginnering?",
    subComment: [
      {
        comment: "Yes, I am.",
        subComment: [
          {
            comment: "Which year are you studying?",
            subComment: [
              {
                comment: "4th Year",
                subComment: [
                  {
                    comment: "Nice!!!",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
function renderComments(para, parent, level = 1, subLevel = 2) {
  para.map((el) => {
    let commentDiv = document.createElement("div");
    commentDiv.innerHTML = el.comment;
    commentDiv.style.marginLeft = level * 10 + "px";
    commentDiv.classList.add("comment");
    parent.appendChild(commentDiv);

    if (typeof el.subComment === "object") {
      renderComments(el.subComment, commentDiv, level + 1, subLevel + 1);
    } else if (typeof el.subComment === "string" && el.subComment) {
      let commentSubDiv = document.createElement("div");
      commentSubDiv.innerHTML = el.subComment;
      commentSubDiv.classList.add("comment");
      commentSubDiv.style.marginLeft = subLevel * 10 + "px";
      parent.appendChild(commentSubDiv);
    }
  });
}

renderComments(comments, document.getElementById("comment"));
