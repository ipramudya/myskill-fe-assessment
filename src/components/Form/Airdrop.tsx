import { cn } from "@/functions/cn"
import { formatBytes } from "@/functions/file"
import Image from "next/image"
import { InputHTMLAttributes, useCallback, useMemo, useState } from "react"
import { useDropzone } from "react-dropzone"
import Button from "../Button"
import Icon from "../Icon"

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
	onUploadChange: (files: File | null) => void
	isProfile?: boolean
	defaultValue: File | null
}

export default function Airdrop({
	defaultValue,
	onUploadChange,
	isProfile = false,
	...restProps
}: Props) {
	const [file, setFile] = useState<File | null>(defaultValue)

	/* to memoizing and reducee rerender, we need useCallback to pass onDrop fn into useDropzone as argument */
	const onDrop = useCallback(
		(files: File[]) => {
			onUploadChange(files[0])
			setFile(files[0])
		},
		[onUploadChange],
	)

	const { open, getRootProps, getInputProps } = useDropzone({
		accept: {
			"image/*": [".png", ".jpeg", ".jpg"],
		},
		maxFiles: 1,
		multiple: false,
		maxSize: 10e7, // 10 mb
		noClick: true,
		onDrop,
	})

	const processedFile = useMemo(() => {
		if (file === null) return null

		const imageURL = URL.createObjectURL(file)

		return {
			name: file.name,
			size: formatBytes(file.size),
			url: imageURL,
		}
	}, [file])

	const handleRemoveImage = () => {
		setFile(null)
		onUploadChange(null)
	}

	return (
		<div
			className={cn(
				"flex min-h-[100px] items-center justify-center rounded-md border border-stroke bg-white p-4",
				processedFile ? "border-solid shadow-sm" : "border-dashed",
			)}
			{...(processedFile ? {} : getRootProps())}
		>
			<div className="flex flex-col items-center space-y-3 text-center">
				{processedFile ? (
					<>
						<Image
							src={processedFile.url}
							alt="uploaded file"
							width={isProfile ? 200 : 768}
							height={isProfile ? 200 : 400}
							className={cn(
								isProfile
									? "aspect-square w-[100px] rounded-full"
									: "aspect-[4/1] w-full rounded-md",
							)}
						/>
						<div className="flex flex-col space-y-1">
							<p className="text-xs text-gray">{processedFile.name}</p>
							<p className="text-xs text-gray">File size: {processedFile.size}</p>
						</div>
						<Button
							size="sm"
							colorScheme="danger"
							onClick={handleRemoveImage}
							className="max-w-fit bg-transparent text-danger hover:bg-danger/10"
						>
							Hapus unggahan
						</Button>
					</>
				) : (
					<>
						<Icon.UploadImage className="mx-auto h-6 w-6 text-gray" />
						<p className="text-sm font-medium">
							Drag and drop files, or{" "}
							<span className="text-primary" role="button" onClick={open}>
								browse
							</span>
						</p>
						<div className="flex flex-col space-y-1">
							<p className="text-xs text-gray">Support files: png, jpg, jpeg</p>
							<p className="text-xs text-gray">Max size: 10MB</p>
						</div>
						<input {...getInputProps({ ...restProps })} />
					</>
				)}
			</div>
		</div>
	)
}
