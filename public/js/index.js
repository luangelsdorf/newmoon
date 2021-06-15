export function launch() {
  //faz o scroll do background
  document.body.style.backgroundPositionY = 'top';

  let sections = document.querySelectorAll('section');
  let [firstSection, secondSection] = sections;
  let canvas = document.querySelector('canvas');
  let nave = document.getElementById('nave');

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

  let spaceshipAnimation = nave.animate(
    [
      {
        transform: 'initial'
      },
      {
        transform: 'rotate(45deg)'
      }
    ],
    {
      duration: 5000,
      easing: 'ease',
      delay: 800
    }
  );

  firstAnimation.onfinish = () => {
    firstSection.style.display = 'none';
    secondSection.style.display = 'flex';
    nave.style.transform = 'rotate(45deg)';

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

    let starsAnimation = canvas.animate(
      [
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      ],
      {
        duration: 1500,
        easing: 'ease'
      }
    );
    starsAnimation.onfinish = () => canvas.style.opacity = '1';
  }
}