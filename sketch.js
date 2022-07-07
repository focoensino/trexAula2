var trex, trexcorrendo, chao, chaoinvisivel, nuvem, cacto, escolherCacto

var imgchao, imgNuvem
var imgCacto1, imgCacto2, imgCacto3, imgCacto4, imgCacto5, imgCacto6

function preload() {
  trexcorrendo = loadAnimation('trex1.png', 'trex2.png', 'trex3.png')
  imgchao = loadImage('ground2.png')
  imgNuvem = loadImage('cloud.png')
  imgCacto1 = loadImage('obstacle1.png')
  imgCacto2 = loadImage('obstacle2.png')
  imgCacto3 = loadImage('obstacle3.png')
  imgCacto4 = loadImage('obstacle4.png')
  imgCacto5 = loadImage('obstacle5.png')
  imgCacto6 = loadImage('obstacle6.png')
}

function setup() {
  createCanvas(600, 200)
  trex = createSprite(50, 100, 40, 40)
  trex.addAnimation('correndo', trexcorrendo)
  trex.scale = 0.5

  chao = createSprite(200, 180, 500, 10)
  chao.addImage(imgchao)

  chaoinvisivel = createSprite(200, 190, 500, 10)
  chaoinvisivel.visible = false
}

function draw() {
  background(180)
  chao.velocityX = -6

  if (chao.x < 0) {
    chao.x = chao.width / 2
  }

  if (keyDown('space') && trex.y > 161) {
    trex.velocityY = -13
  }
  trex.velocityY = trex.velocityY + 1
  trex.collide(chaoinvisivel)

  gerarNuvens()
  gerarCactos()

  drawSprites()
}

function gerarNuvens() {
  if (frameCount % 60 == 0) {
    nuvem = createSprite(600, 80, 50, 10)
    nuvem.addImage(imgNuvem)
    nuvem.y = Math.round(random(20, 80))
    nuvem.depth = trex.depth
    trex.depth = trex.depth + 1
    nuvem.scale = 0.4
    nuvem.velocityX = -3
  }
}

function gerarCactos() {
  if (frameCount % 60 == 0) {
    cacto = createSprite(600, 165, 10, 40)

    cacto.velocityX = -6

    escolherCacto = Math.round(random(1, 6))

    switch (escolherCacto) {
      case 1:
        cacto.addImage(imgCacto1)
        break
      case 2:
        cacto.addImage(imgCacto2)
        break
      case 3:
        cacto.addImage(imgCacto3)
        break
      case 4:
        cacto.addImage(imgCacto4)
        break
      case 5:
        cacto.addImage(imgCacto5)
        break
      case 6:
        cacto.addImage(imgCacto6)
        break
      default:
        break
    }
    cacto.scale = 0.4
  }
}
