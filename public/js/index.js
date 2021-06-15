export function launch() {
  //faz o scroll do background
  document.body.style.backgroundPositionY = 'top';

  let sections = document.querySelectorAll('section');
  let [firstSection, secondSection] = sections;

  let firstAnimation = firstSection.animate(
    [
      {
        opacity: 1,
        transform: 'initial'
      },
      {
        opacity: 0,
        offset: 0.5
      },
      {
        opacity: 0,
        transform: 'translateY(500px)'
      }
    ],
    {
      duration: 3000,
      easing: 'ease',
    }
  );

  firstAnimation.onfinish = () => {
    firstSection.style.display = 'none';
    secondSection.style.display = 'flex';
    spaceshipAnimation();

    let secondAnimation = secondSection.animate(
      [
        {
          opacity: 0,
          transform: 'translateY(-200px)'
        },
        {
          opacity: 1,
          transform: 'initial'
        }
      ],
      {
        duration: 2500,
        easing: 'ease'
      }
    );
  }
}

function spaceshipAnimation() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth)

  document.getElementById('nave').animate(
    [
      {

      },
      {

      }
    ],
    {
      duration: 2000,
      easing: 'ease',
    }
  )
}