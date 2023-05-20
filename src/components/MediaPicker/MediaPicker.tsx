'use client'
import { ChangeEvent, useState } from 'react'

const MediaPicker = () => {
  const [preview, setPreview] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) return

    const file = files[0]
    const previewUrl = URL.createObjectURL(file)
    setPreview(previewUrl)

    // Verifica o tipo de mídia do arquivo selecionado
    if (file.type.startsWith('image/')) {
      setMediaType('image')
    } else if (file.type.startsWith('video/')) {
      setMediaType('video')
    } else {
      setMediaType(null)
    }
  }

  return (
    <>
      <input
        type="file"
        id="media"
        name="coverUrl"
        className="invisible h-0 w-0"
        accept="image/*, video/*"
        onChange={onFileSelected}
      />
      {mediaType === 'image' && preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      {mediaType === 'video' && preview && (
        <video src={preview} controls className="w-full rounded-lg" />
      )}
    </>
  )
}

export default MediaPicker
